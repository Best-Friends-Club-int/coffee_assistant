Так. Перевір, щоб була був антикеш, зберігання кешу, посилання на каву в укр та Європі, реферальне посилання, правильний старт, переклади та така логіка як тут:  // --- Логіка ---
let currentQ = 0;
let userProfile = {};
let selectedMethod = null;
let selectedDrink = null;

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");

function addTags(tags) {
  for (const [key, value] of Object.entries(tags)) {
    if (!userProfile[key]) userProfile[key] = 0;
    userProfile[key] += value;
  }
}

function showQuestion() {
  // якщо користувач вибрав filter → пропускаємо питання про напій
  if (
    selectedMethod === "filter" &&
    questions[currentQ].answers.some(a => a.drink)
  ) {
    showResult();
    return;
  }

  quizEl.innerHTML = `<h2>${questions[currentQ].text}</h2>`;
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  questions[currentQ].answers.forEach(a => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML = `<img src="${a.img}" alt="${a.text}"><p>${a.text}</p>`;
    card.onclick = () => {
      if (a.tags && Object.keys(a.tags).length > 0) addTags(a.tags);
      if (a.method) selectedMethod = a.method;
      if (a.drink) selectedDrink = a.drink;

      currentQ++;
      if (currentQ < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    gallery.appendChild(card);
  });

  quizEl.appendChild(gallery);
}

function showResult() {
  let coffees = [...coffeeProfiles];

  // --- якщо метод = filter ---
  if (selectedMethod === "filter") {
    const filterCoffees = coffees.filter(c => c.category === "filter");
    const main = filterCoffees[0];
    const alt = filterCoffees[1];

    let html = `
      <h2>Ваша кава — ${main.name}</h2>
      <img src="${main.img}" alt="${main.name}">
      <div class="final-phrase">${endPhrases[Math.floor(Math.random() * endPhrases.length)]}</div>
      <a href="${main.link}" target="_blank"><button>☕ Замовити</button></a>
    `;

    if (alt) {
      html += `<h3>✨ Вам також може сподобатися:</h3>
      <div class="gallery">
        <a href="${alt.link}" target="_blank" class="gallery-item">
          <img src="${alt.img}" alt="${alt.name}">
          <p>${alt.name}</p>
        </a>
      </div>`;
    }

    resultEl.innerHTML = html;
    quizEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    return;
  }

  // --- звичайна логіка ---
  if (selectedDrink === "milk" || selectedDrink === "cappuccino") {
    coffees = coffees.filter(c => c.category !== "filter");
  }

  if (selectedDrink === "espresso") {
    if (Math.random() > 0.1) {
      coffees = coffees.filter(c => c.category !== "filter");
    }
  }

  let scores = coffees.map(coffee => {
    let score = 0;
    for (const [tag, weight] of Object.entries(userProfile)) {
      if (coffee.tags[tag]) score += Math.min(weight, coffee.tags[tag]);
    }
    return { ...coffee, score };
  });

  scores.sort((a, b) => b.score - a.score);
  const mainCoffee = scores[0];
  const recommendations = scores.slice(1, 3);

  let html = `
    <h2>Ваша кава — ${mainCoffee.name}</h2>
    <img src="${mainCoffee.img}" alt="${mainCoffee.name}">
    <div class="final-phrase">${endPhrases[Math.floor(Math.random() * endPhrases.length)]}</div>
    <a href="${mainCoffee.link}" target="_blank"><button>☕ Замовити</button></a>
  `;

  if (recommendations.length > 0) {
    html += `<h3>✨ Вам також може сподобатися:</h3><div class="gallery">`;
    recommendations.forEach(c => {
      html += `
        <a href="${c.link}" target="_blank" class="gallery-item">
          <img src="${c.img}" alt="${c.name}">
          <p>${c.name}</p>
        </a>`;
    });
    html += `</div>`;
  }
