const EVENTS = new Set(['homeia_visit', 'questionnaire_started', 'whatsapp_click']);

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
  });
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const event = String(body?.event || '');
    if (!EVENTS.has(event)) return json({ error: 'Evento inválido' }, 400);
    if (!env.METRICS_KV) return json({ error: 'Armazenamento ainda não configurado' }, 503);
    const totalKey = `metrics:total:${event}`;
    const dayKey = `metrics:day:${new Date().toISOString().slice(0, 10)}:${event}`;
    const total = Number(await env.METRICS_KV.get(totalKey) || 0) + 1;
    const day = Number(await env.METRICS_KV.get(dayKey) || 0) + 1;
    await Promise.all([
      env.METRICS_KV.put(totalKey, String(total)),
      env.METRICS_KV.put(dayKey, String(day), { expirationTtl: 60 * 60 * 24 * 400 })
    ]);
    return json({ ok: true });
  } catch {
    return json({ error: 'Requisição inválida' }, 400);
  }
}

export async function onRequestGet({ env }) {
  if (!env.METRICS_KV) return json({ error: 'Armazenamento ainda não configurado' }, 503);
  const values = await Promise.all([...EVENTS].map(async event => [event, Number(await env.METRICS_KV.get(`metrics:total:${event}`) || 0)]));
  return json(Object.fromEntries(values));
}
