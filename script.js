// --- Переклади ---
const translations = {
  uk: {
    startTitle: "☕ Твій кавовий настрій",
    startText: "Хочеш дізнатись, яка кава пасує саме твоєму настрою? Ми підкинемо ідею!",
    startBtn: "🚀 Поїхали",
    resultTitle: "Ваша кава —",
    alsoLike: "✨ Вам також може сподобатися:"
  },
  ru: {
    startTitle: "☕ Твоё кофейное настроение",
    startText: "Хочешь узнать, какой кофе подойдёт твоему настроению? Мы подскажем!",
    startBtn: "🚀 Поехали",
    resultTitle: "Твой кофе —",
    alsoLike: "✨ Тебе также может понравиться:"
  },
  en: {
    startTitle: "☕ Your Coffee Mood",
    startText: "Want to know which coffee matches your vibe? Let's find out!",
    startBtn: "🚀 Let's go",
    resultTitle: "Your coffee is —",
    alsoLike: "✨ You may also like:"
  },
  es: {
    startTitle: "☕ Tu Estado de Café",
    startText: "¿Quieres saber qué café combina con tu estado de ánimo? ¡Vamos a descubrirlo!",
    startBtn: "🚀 Vamos",
    resultTitle: "Tu café es —",
    alsoLike: "✨ También te puede gustar:"
  },
  pl: {
    startTitle: "☕ Twój Kawowy Nastrój",
    startText: "Chcesz dowiedzieć się, która kawa pasuje do Twojego nastroju? Podpowiemy Ci!",
    startBtn: "🚀 Zaczynamy",
    resultTitle: "Twoja kawa to —",
    alsoLike: "✨ Może Ci się spodobać:"
  }
};

// --- fallback мови ---
let userLang = navigator.language.slice(0, 2);
if (!translations[userLang]) userLang = "en";
const t = translations[userLang];

// --- Фрази для фіналу ---
const endPhrases = [
  "😏 Чудовий вибір! Замов і зареєструйся в нашому клубі, щоб отримати ще більше!",
  "🎯 У тебе чудовий смак! Час замовити каву та приєднатися до нашої спільноти!",
  "☕ Оце результат! Тепер справа за малим — придбай каву та реєструйся в нашому клубі кавових ентузіастів.",
  "😉 О, також одна з моїх улюблених! А тепер мершій реєструватися до нашої міжнародної спільноти кавоманів!",
  "✨ У тебе є смак до життя, однозначно! Розділи свій досвід з нами та реєструйся до нашого клубу!"
];

// --- Кави ---
const coffeeProfiles = [
  { name: "Ethiopia Gedeb 250g", img: "images/ethiopia_gadeb.png", link: "/store/product/43", tags: { fruit: 2, filter: 3, americano: 1 }, category: "filter" },
  { name: "Kenya AA Gikanda 250g", img: "images/kenya_aa.png", link: "/store/product/39", tags: { fruit: 2, filter: 3, americano: 1 }, category: "filter" },
  { name: "Brazil Mogiana 250g", img: "images/brazil_mogiana.png", link: "/store/product/33", tags: { choco: 2, espresso: 3, milk: 2, cappuccino: 2, moka: 1 } },
  { name: "Colombia Excelso 250g", img: "images/colombia_excleso.png", link: "/store/product/35", tags: { choco: 2, espresso: 2, milk: 1, moka: 1 } },
  { name: "Arabica Midday 250g", img: "images/midday.png", link: "/store/product/45", tags: { dessert: 2, espresso: 2, milk: 2, cappuccino: 2, moka: 1 } },
  { name: "Arabica Midnight 250g", img: "images/midnight.png", link: "/store/product/31", tags: { choco: 1, dessert: 2, espresso: 2, americano: 1, immersion: 1 } },
  { name: "Arabica Sunrise 250g", img: "images/sunrise.png", link: "/store/product/36", tags: { dessert: 2, espresso: 2, americano: 1, milk: 1, immersion: 1, moka: 1 } },
  { name: "Arabusta Dark 250g", img: "images/dark.png", link: "/store/product/29", tags: { dark: 3, espresso: 3, cappuccino: 2, moka: 2 } },
  { name: "Arabusta Amber 250g", img: "images/amber.png", link: "/store/product/30", tags: { dark: 2, espresso: 2, milk: 2, cappuccino: 2, americano: 1, moka: 1 } },
  { name: "Decaf Colombia Huila 250g", img: "images/columbia_decaf.png", link: "/store/product/34", tags: { classic: 2, espresso: 2, milk: 1, cappuccino: 1, americano: 1, immersion: 1 } }
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

// гео + реф + антикеш
async function adjustLink(baseLink) {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const isUA = data.country_code === "UA";
    const url = `https://bfc24.com${isUA ? "/uk" : ""}${baseLink}?ref=nedavai&_=${Date.now()}`;
    return url;
  } catch {
    return `https://bfc24.com/uk${baseLink}?ref=nedavai&_=${Date.now()}`;
  }
}

function addTags(tags) {
  for (const [key, value] of Object.entries(tags)) {
    if (!userProfile[key]) userProfile[key] = 0;
    userProfile[key] += value;
  }
}

function showResult() {
  let coffees = [...coffeeProfiles];

  if (selectedMethod === "filter") {
    const filterCoffees = coffees.filter(c => c.category === "filter");
    renderResult(filterCoffees[0], [filterCoffees[1]]);
    return;
  }

  if (selectedDrink === "milk" || selectedDrink === "cappuccino") {
    coffees = coffees.filter(c => c.category !== "filter");
  }

  if (selectedDrink === "espresso") {
    if (Math.random() > 0.1) coffees = coffees.filter(c => c.category !== "filter");
  }

  let scores = coffees.map(coffee => {
    let score = 0;
    for (const [tag, weight] of Object.entries(userProfile)) {
      if (coffee.tags[tag]) score += Math.min(weight, coffee.tags[tag]);
    }
    return { ...coffee, score };
  });

  scores.sort((a, b) => b.score - a.score);
  renderResult(scores[0], scores.slice(1, 3));
}

async function renderResult(main, recommendations = []) {
  const mainLink = await adjustLink(main.link);
  let html = `
    <h2>${t.resultTitle} ${main.name}</h2>
    <img src="${main.img}" alt="${main.name}">
    <div class="final-phrase">${endPhrases[Math.floor(Math.random() * endPhrases.length)]}</div>
    <a href="${mainLink}" target="_blank"><button>☕ Замовити</button></a>
  `;

  if (recommendations.length > 0) {
    html += `<h3>${t.alsoLike}</h3><div class="gallery">`;
    for (let c of recommendations) {
      const link = await adjustLink(c.link);
      html += `
        <a href="${link}" target="_blank" class="gallery-item">
          <img src="${c.img}" alt="${c.name}">
          <p>${c.name}</p>
        </a>`;
    }
    html += `</div>`;
  }

  resultEl.innerHTML = html;
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
}

// старт
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizEl.classList.remove("hidden");
  showResult(); // тут має бути showQuestion() після того як вставимо питання
});

// --- застосування перекладів на старт ---
document.querySelector("h1").innerText = t.startTitle;
startScreen.querySelector("h2").innerText = t.startText;
startBtn.innerText = t.startBtn;