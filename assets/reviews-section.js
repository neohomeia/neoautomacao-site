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
    <a class="reviews-score" href="${GOOGLE_PROFILE_URL}" target="_blank" rel="noreferrer" aria-label="Ver as 4 avaliações da NeoHome no Google Maps">
      <strong>5,0</strong>
      <span class="reviews-score-stars" aria-hidden="true">★★★★★</span>
      <small>4 avaliações no Google</small>
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
  if (faqKicker) faqKicker.textContent = "06 · Perguntas frequentes";
  faq.before(buildReviewsSection());
  return true;
}

if (!mountReviews()) {
  const observer = new MutationObserver(() => {
    if (mountReviews()) observer.disconnect();
  });
  observer.observe(document.getElementById("root"), { childList: true, subtree: true });
}
