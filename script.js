// --- Фрази для фіналу ---
const endPhrases = [
  "😏 Чудовий вибір! Замов і зареєструйся в нашому клубі, щоб отримати ще більше!",
  "🎯 У тебе чудовий смак! Час замовити каву та приєднатися до нашої спільноти!",
  "☕ Оце результат! Тепер справа за малим — придбай каву та реєструйся в нашому клубі кавових ентузіастів.",
  "😉 О, також одна з моїх улюблених! А тепер мершій реєструватися до нашої міжнародної спільноти кавоманів!",
  "✨ У тебе є смак до життя, однозначно! Розділи свій досвід з нами та реєструйся до нашого клубу!"
];

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

  // --- фан-питання ---
  {
    text: "☀️ Яка сцена тобі ближча?",
    answers: [
      { text: "Середземна фієста", tags: {}, img: "images/scene_fiesta.png" },
      { text: "Прогулянка після дощу", tags: {}, img: "images/scene_rain.png" },
      { text: "Затишний плед і книга", tags: {}, img: "images/scene_book.png" },
      { text: "Ранковий коворкінг", tags: {}, img: "images/scene_cowork.png" }
    ]
  },
  {
    text: "🍸 Який коктейль твій улюблений?",
    answers: [
      { text: "Апероль Шприц", tags: {}, img: "images/cocktail_aperol.png" },
      { text: "Мохіто", tags: {}, img: "images/cocktail_mojito.png" },
      { text: "Віскі-кола", tags: {}, img: "images/cocktail_whiskey.png" },
      { text: "Еспресо мартіні", tags: {}, img: "images/cocktail_espresso.png" }
    ]
  },
  {
    text: "🌿 Як ти любиш проводити вихідні?",
    answers: [
      { text: "Прогулянка", tags: {}, img: "images/weekend_nature.png" },
      { text: "Вечірка з друзями", tags: {}, img: "images/weekend_party.png" },
      { text: "Затишний день вдома", tags: {}, img: "images/weekend_home.png" },
      { text: "Подорож у нове місто", tags: {}, img: "images/weekend_trip.png" }
    ]
  },

  // --- ключові питання ---
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

const coffeeProfiles = [
  { 
    name: "Ethiopia Gedeb 250g", 
    img: "images/ethiopia_gadeb.png", 
    link: "https://bfc24.com/uk/store/product/43", 
    tags: { fruit: 2, filter: 3, americano: 1 }, 
    category: "filter" 
  },
  { 
    name: "Kenya AA Gikanda Kangocho 250g", 
    img: "images/kenya_aa.png", 
    link: "https://bfc24.com/uk/store/product/39", 
    tags: { fruit: 2, filter: 3, americano: 1 }, 
    category: "filter" 
  },
  { 
    name: "Brazil Mogiana 250g", 
    img: "images/brazil_mogiana.png", 
    link: "https://bfc24.com/uk/store/product/33", 
    tags: { choco: 2, espresso: 3, milk: 2, cappuccino: 2, moka: 1 } 
  },
  { 
    name: "Colombia Excelso 250g", 
    img: "images/colombia_excleso.png", 
    link: "https://bfc24.com/uk/store/product/35", 
    tags: { choco: 2, espresso: 2, milk: 1, moka: 1 } 
  },
  { 
    name: "Arabica Midday 250g", 
    img: "images/midday.png", 
    link: "https://bfc24.com/uk/store/product/45", 
    tags: { dessert: 2, espresso: 2, milk: 2, cappuccino: 2, moka: 1 } 
  },
  { 
    name: "Arabica Midnight 250g", 
    img: "images/midnight.png", 
    link: "https://bfc24.com/uk/store/product/31", 
    tags: { choco: 1, dessert: 2, espresso: 2, americano: 1, immersion: 1 } 
  },
  { 
    name: "Arabica Sunrise 250g", 
    img: "images/sunrise.png", 
    link: "https://bfc24.com/uk/store/product/36", 
    tags: { dessert: 2, espresso: 2, americano: 1, milk: 1, immersion: 1, moka: 1 } 
  },
  { 
    name: "Arabusta Dark 250g", 
    img: "images/dark.png", 
    link: "https://bfc24.com/uk/store/product/29", 
    tags: { dark: 3, espresso: 3, cappuccino: 2, moka: 2 } 
  },
  { 
    name: "Arabusta Amber 250g", 
    img: "images/amber.png", 
    link: "https://bfc24.com/uk/store/product/30", 
    tags: { dark: 2, espresso: 2, milk: 2, cappuccino: 2, americano: 1, moka: 1 } 
  },
  { 
    name: "Decaf Colombia Huila 250g", 
    img: "images/columbia_decaf.png", 
    link: "https://bfc24.com/uk/store/product/34", 
    tags: { classic: 2, espresso: 2, milk: 1, cappuccino: 1, americano: 1, immersion: 1 } 
  },
  { 
    name: "Ethiopia Aleta Wondo 250g", 
    img: "images/ethiopia_aleta.png", 
    link: "https://bfc24.com/uk/store/product/32", 
    tags: { fruit: 2, filter: 2, espresso: 1 } 
  },
  { 
    name: "Brazil Fazenda Pedra Grande 250g", 
    img: "images/brazil_fazenda.png", 
    link: "https://bfc24.com/uk/store/product/41", 
    tags: { choco: 2, espresso: 2, moka: 1 } 
  },
  { 
    name: "Colombia Cauca Popayan 250g", 
    img: "images/colombia_cauca.png", 
    link: "https://bfc24.com/uk/store/product/40", 
    tags: { choco: 2, fruit: 1, espresso: 2 } 
  },
  { 
    name: "Mexico El Buho 250g", 
    img: "images/mexico_el_buho.png", 
    link: "https://bfc24.com/uk/store/product/38", 
    tags: { choco: 1, dark: 1, espresso: 2, americano: 1 } 
  }
];


// --- Логіка ---
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

  resultEl.innerHTML = html;
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
}

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizEl.classList.remove("hidden");
  showQuestion();
});
