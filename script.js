// --- Фрази для фіналу ---
const endPhrases = [
  "😏 Чудовий вибір! Замов і зареєструйся в нашому клубі, щоб отримати ще більше!",
  "🎯 У тебе чудовий смак! Час замовити каву та приєднатися до нашої спільноти!",
  "☕ Оце результат! Тепер справа за малим — придбай каву та реєструйся в нашому клубі кавових ентузіастів.",
  "😉 О, також одна з моїх улюблених! А тепер мершій реєструватися до нашої міжнародної спільноти кавоманів!",
  "✨ У тебе є смак до життя, однозначно! Розділи свій досвід з нами та реєструйся до нашого клубу!"
];

// --- Питання + відповіді ---
const questions = [
  {
    text: "🍰 Улюблений десерт дитинства?",
    answers: [
      { text: "Шоколадний торт", tags: { choco: 2, espresso: 1 }, img: "images/dessert_choco.png" },
      { text: "Мармелад", tags: { fruit: 2, filter: 1 }, img: "images/dessert_marmelad.png" },
      { text: "Халва", tags: { dark: 2, moka: 1 }, img: "images/dessert_halva.png" },
      { text: "Медовик", tags: { dessert: 2, espresso: 1 }, img: "images/dessert_honey.png" }
    ]
  },
  {
    text: "🍊 Який фрукт твій улюблений?",
    answers: [
      { text: "Ягода", tags: { fruit: 2, filter: 1 }, img: "images/fruit_berry.png" },
      { text: "Цитрус", tags: { fruit: 2, filter: 1 }, img: "images/fruit_citrus.png" },
      { text: "Яблуко/груша", tags: { choco: 1 }, img: "images/fruit_apple.png" },
      { text: "Сухофрукти", tags: { dark: 2, moka: 1 }, img: "images/fruit_dry.png" }
    ]
  },
  {
    text: "🌸 Які парфуми тобі ближчі?",
    answers: [
      { text: "Квіткові", tags: { fruit: 2 }, img: "images/perfume_flower.png" },
      { text: "Свіжі цитрусові", tags: { fruit: 2, filter: 1 }, img: "images/perfume_citrus.png" },
      { text: "Солодкі гурманські", tags: { choco: 2 }, img: "images/perfume_sweet.png" },
      { text: "Деревні/пряні", tags: { dark: 2 }, img: "images/perfume_wood.png" }
    ]
  },
  {
    text: "🫖 Який метод заварювання тобі ближче?",
    answers: [
      { text: "Фільтр (V60, Chemex)", tags: { filter: 3, fruit: 1 }, method: "filter", img: "images/brew_filter.png" },
      { text: "Еспресо-машина", tags: { espresso: 3 }, method: "espresso", img: "images/brew_espresso.png" },
      { text: "Гейзерна (Moka pot)", tags: { moka: 3, dark: 1 }, method: "moka", img: "images/brew_moka.png" },
      { text: "Френч Прес, Чашка", tags: { immersion: 3, dessert: 1 }, method: "immersion", img: "images/brew_turkish.png" }
    ]
  },
  {
    text: "☕ Який кавовий напій тобі ближче?",
    answers: [
      { text: "Еспресо", tags: { espresso: 2 }, drink: "espresso", img: "images/drink_espresso.png" },
      { text: "Американо", tags: { americano: 2 }, drink: "americano", img: "images/drink_americano.png" },
      { text: "Американо з молоком", tags: { milk: 2 }, drink: "milk", img: "images/drink_milk.png" },
      { text: "Капучино", tags: { cappuccino: 2, milk: 2 }, drink: "cappuccino", img: "images/drink_cappuccino.png" }
    ]
  }
];

// --- Профілі кави (паспорт тегів) ---
const coffeeProfiles = [
  { name: "Ethiopia Gedeb 250g", img: "images/ethiopia_gadeb.png", link: "#", tags: { fruit: 2, filter: 3, americano: 1 } },
  { name: "Kenya AA Gikanda 250g", img: "images/kenya_aa.png", link: "#", tags: { fruit: 2, filter: 3, americano: 1 } },
  { name: "Brazil Mogiana 250g", img: "images/brazil_mogiana.png", link: "#", tags: { choco: 2, espresso: 3, milk: 2, cappuccino: 2, moka: 1 } },
  { name: "Colombia Excelso 250g", img: "images/colombia_excleso.png", link: "#", tags: { choco: 2, espresso: 2, milk: 1, moka: 1 } },
  { name: "Arabica Midday 250g", img: "images/midday.png", link: "#", tags: { dessert: 2, espresso: 2, milk: 2, cappuccino: 2, moka: 1 } },
  { name: "Arabica Midnight 250g", img: "images/midnight.png", link: "#", tags: { choco: 1, dessert: 2, espresso: 2, americano: 1, immersion: 1 } },
  { name: "Arabica Sunrise 250g", img: "images/sunrise.png", link: "#", tags: { dessert: 2, espresso: 2, americano: 1, milk: 1, immersion: 1, moka: 1 } },
  { name: "Arabusta Dark 250g", img: "images/dark.png", link: "#", tags: { dark: 3, espresso: 3, cappuccino: 2, moka: 2 } },
  { name: "Arabusta Amber 250g", img: "images/amber.png", link: "#", tags: { dark: 2, espresso: 2, milk: 2, cappuccino: 2, americano: 1, moka: 1 } },
  { name: "Decaf Colombia Huila 250g", img: "images/columbia_decaf.png", link: "#", tags: { classic: 2, espresso: 2, milk: 1, cappuccino: 1, americano: 1, immersion: 1 } }
];

// --- Логіка ---
let currentQ = 0;
let userProfile = {}; // теги користувача

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");

// функція додавання тегів у профіль користувача
function addTags(tags) {
  for (const [key, value] of Object.entries(tags)) {
    if (!userProfile[key]) userProfile[key] = 0;
    userProfile[key] += value;
  }
}

// відображення питання
function showQuestion() {
  quizEl.innerHTML = `<h2>${questions[currentQ].text}</h2>`;
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  questions[currentQ].answers.forEach(a => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML = `<img src="${a.img}" alt="${a.text}"><p>${a.text}</p>`;
    card.onclick = () => {
      addTags(a.tags);
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

// підбір кави
function showResult() {
  let scores = coffeeProfiles.map(coffee => {
    let score = 0;
    for (const [tag, weight] of Object.entries(userProfile)) {
      if (coffee.tags[tag]) {
        score += Math.min(weight, coffee.tags[tag]); // враховуємо ваги
      }
    }
    return { ...coffee, score };
  });

  scores.sort((a, b) => b.score - a.score);

  const mainCoffee = scores[0];
  const recommendations = scores.slice(1, 3);

  let html = `
    <h2>Ваша кава — ${mainCoffee.name}</h2>
    <img src="${mainCoffee.img}" alt="${mainCoffee.name}">
    <p>${mainCoffee.desc || ""}</p>
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

  resultEl.innerHTML = html;
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
}

// запуск
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizEl.classList.remove("hidden");
  showQuestion();
});
