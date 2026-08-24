const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=Neo+Home+automa%C3%A7%C3%A3o+residencial";
const WHATSAPP_URL =
  "https://wa.me/5547996830740?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20automa%C3%A7%C3%A3o%20residencial.";

const reviews = [
  {
    author: "Julio Felicio",
    text: "Serviço de primeira, a instalação da fechadura digital na porta de alumínio da minha casa foi muito bem feita.",
  },
  {
    author: "Adriana Aguiar",
    text: "O serviço foi muito bem feito. Com zelo, cuidado e responsabilidade. Adorei.",
    detail: "Ótimo preço",
  },
  {
    author: "Aldaléia Farias",
    text: "Serviço executado com capricho, paciência e clareza.",
  },
  {
    author: "Saimon Gomes",
    text: "Excelente atendimento e agilidade no atendimento!",
  },
];

function reviewCard(review) {
  const article = document.createElement("article");
  article.className = "google-review-card";

  const stars = document.createElement("div");
  stars.className = "google-review-stars";
  stars.setAttribute("aria-label", "5 de 5 estrelas");
  stars.textContent = "★★★★★";

  const quote = document.createElement("blockquote");
  quote.textContent = `“${review.text}”`;

  const footer = document.createElement("footer");
  footer.className = "google-review-footer";

  const author = document.createElement("div");
  author.className = "google-review-author";
  const initial = document.createElement("span");
  initial.className = "google-review-avatar";
  initial.setAttribute("aria-hidden", "true");
  initial.textContent = review.author.charAt(0);
  const authorCopy = document.createElement("div");
  const authorName = document.createElement("strong");
  authorName.textContent = review.author;
  const source = document.createElement("span");
  source.textContent = review.detail
    ? `Avaliação no Google · ${review.detail}`
    : "Avaliação publicada no Google";
  authorCopy.append(authorName, source);
  author.append(initial, authorCopy);

  const googleMark = document.createElement("span");
  googleMark.className = "google-review-mark";
  googleMark.setAttribute("aria-label", "Google");
  googleMark.textContent = "G";

  footer.append(author, googleMark);
  article.append(stars, quote, footer);
  return article;
}

function buildReviewsSection() {
  const section = document.createElement("section");
  section.className = "reviews-section";
  section.id = "avaliacoes";
  section.setAttribute("aria-labelledby", "reviews-title");

  const top = document.createElement("div");
  top.className = "reviews-heading";
  top.innerHTML = `
    <div>
      <div class="reviews-kicker">05 · Experiências reais</div>
      <h2 id="reviews-title">Quem contrata, <em>recomenda.</em></h2>
      <p>Relatos de clientes que confiaram na NeoHome para cuidar dos seus espaços.</p>
    </div>
    <a class="reviews-score" href="${GOOGLE_PROFILE_URL}" target="_blank" rel="noreferrer" aria-label="Ver algumas avaliações da NeoHome no Google Maps">
      <strong>5,0</strong>
      <span class="reviews-score-stars" aria-hidden="true">★★★★★</span>
      <small>Algumas de nossas avaliações</small>
    </a>`;

  const grid = document.createElement("div");
  grid.className = "reviews-grid";
  reviews.forEach((review) => grid.append(reviewCard(review)));

  const actions = document.createElement("div");
  actions.className = "reviews-actions";
  actions.innerHTML = `
    <a class="reviews-google-link" href="${GOOGLE_PROFILE_URL}" target="_blank" rel="noreferrer">Ver todas as avaliações no Google <span aria-hidden="true">↗</span></a>
    <a class="reviews-whatsapp-link" href="${WHATSAPP_URL}" target="_blank" rel="noreferrer">Quero conversar sobre meu projeto <span aria-hidden="true">→</span></a>`;

  section.append(top, grid, actions);
  return section;
}

function mountReviews() {
  if (document.querySelector(".reviews-section")) return true;
  const faq = document.querySelector(".faq-section");
  if (!faq) return false;
  const faqKicker = faq.querySelector(".section-kicker");
  if (faqKicker) faqKicker.textContent = "07 · Perguntas frequentes";
  faq.before(buildReviewsSection());
  return true;
}

function buildAirbnbSection() {
  const section = document.createElement("section");
  section.className = "airbnb-section";
  section.setAttribute("aria-labelledby", "airbnb-title");
  section.innerHTML = `
    <div class="airbnb-heading">
      <div class="airbnb-kicker">04 · Imóveis de temporada</div>
      <h2 id="airbnb-title">No Airbnb, automação não é só beleza. <em>É operação que se paga.</em></h2>
      <p>Uma hospedagem inteligente ajuda a reduzir desperdícios, simplificar a gestão e aumentar o valor percebido pelo hóspede.</p>
    </div>
    <div class="airbnb-benefits" aria-label="Benefícios da automação para imóveis de temporada">
      <article>
        <span>01</span>
        <h3>Menos desperdício</h3>
        <p>Iluminação e climatização podem seguir rotinas de uso, evitando equipamentos ligados sem necessidade entre uma reserva e outra.</p>
      </article>
      <article>
        <span>02</span>
        <h3>Gestão à distância</h3>
        <p>Acompanhe e controle recursos pelo aplicativo, reduzindo deslocamentos e ganhando agilidade na preparação do imóvel.</p>
      </article>
      <article>
        <span>03</span>
        <h3>Mais valor percebido</h3>
        <p>Uma experiência simples, confortável e bem preparada diferencia o anúncio, protege o patrimônio e fortalece a avaliação da estadia.</p>
      </article>
    </div>
    <div class="airbnb-investment">
      <strong>Economia na operação. Consistência na experiência. Mais valor para o imóvel.</strong>
      <a href="https://wa.me/5547996830740?text=Ol%C3%A1%2C%20quero%20automatizar%20meu%20im%C3%B3vel%20de%20temporada%20ou%20Airbnb." target="_blank" rel="noreferrer">Quero avaliar meu Airbnb <span aria-hidden="true">→</span></a>
    </div>`;
  return section;
}

function enhanceRegionalSection() {
  const regionSection = document.querySelector(".region-section");
  const mapCard = regionSection?.querySelector(".region-map-card");
  if (!regionSection || !mapCard || mapCard.dataset.enhanced === "true") return false;

  const regionKicker = regionSection.querySelector(".section-kicker");
  if (regionKicker) regionKicker.textContent = "05 · Atendimento regional";
  mapCard.dataset.enhanced = "true";
  mapCard.classList.add("region-map-embed");
  mapCard.innerHTML = `
    <iframe
      title="Mapa da região de atendimento: Florianópolis, São José e Palhoça"
      src="https://www.google.com/maps?ll=-27.5842703,-48.6414619&z=12&output=embed"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen></iframe>
    <div class="region-map-caption">
      <strong>Grande Florianópolis</strong>
      <span>Florianópolis · São José · Palhoça e região</span>
    </div>`;
  return true;
}

function mountAirbnb() {
  if (document.querySelector(".airbnb-section")) return true;
  const regionSection = document.querySelector(".region-section");
  if (!regionSection) return false;
  regionSection.before(buildAirbnbSection());
  return true;
}

function mountEnhancements() {
  const mountedReviews = mountReviews();
  const mountedAirbnb = mountAirbnb();
  const enhancedMap = enhanceRegionalSection();
  const reviewsKicker = document.querySelector(".reviews-kicker");
  if (reviewsKicker) reviewsKicker.textContent = "06 · Experiências reais";
  return mountedReviews && mountedAirbnb && enhancedMap;
}

if (!mountEnhancements()) {
  const observer = new MutationObserver(() => {
    if (mountEnhancements()) observer.disconnect();
  });
  observer.observe(document.getElementById("root"), { childList: true, subtree: true });
}
