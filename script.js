// --- Переклади ---
const translations = {
  uk: {
    startTitle: "☕ Твій кавовий настрій",
    startText: "Хочеш дізнатись, яка кава пасує саме твоєму настрою? Ми підкинемо ідею!",
    startBtn: "🚀 Поїхали",
    finalPhrases: [
      "😏 Чудовий вибір! Замов і зареєструйся в нашому клубі, щоб отримати ще більше!",
      "🎯 У тебе чудовий смак! Час замовити каву та приєднатися до нашої спільноти!",
      "☕ Оце результат! Придбай каву та реєструйся в клубі кавових ентузіастів.",
      "😉 О, також одна з моїх улюблених! Мершій у нашу міжнародну спільноту!",
      "✨ У тебе є смак до життя! Поділись досвідом і приєднуйся до клубу!"
    ]
  },
  en: {
    startTitle: "☕ Your Coffee Mood",
    startText: "Want to know which coffee matches your vibe? Let's find out!",
    startBtn: "🚀 Let's go",
    finalPhrases: [
      "😏 Great choice! Order now and join our club for more!",
      "🎯 You’ve got amazing taste! Time to order and join our community!",
      "☕ That’s the result! Just grab your coffee and sign up.",
      "😉 One of my favorites too! Join our global coffee family!",
      "✨ You definitely have taste! Share it and join our club!"
    ]
  },
  es: {
    startTitle: "☕ Tu estado de ánimo cafetero",
    startText: "¿Quieres saber qué café encaja con tu estado de ánimo? ¡Vamos a descubrirlo!",
    startBtn: "🚀 Empezar",
    finalPhrases: [
      "😏 ¡Gran elección! Haz tu pedido y únete a nuestro club.",
      "🎯 ¡Tienes un gusto excelente! Es hora de unirte a nuestra comunidad.",
      "☕ ¡Ese es el resultado! Compra tu café y regístrate en el club.",
      "😉 ¡También uno de mis favoritos! Únete a nuestra familia cafetera.",
      "✨ ¡Tienes buen gusto! Compártelo y únete al club."
    ]
  },
  ru: {
    startTitle: "☕ Твое кофейное настроение",
    startText: "Хочешь узнать, какой кофе подходит твоему настроению? Давай проверим!",
    startBtn: "🚀 Поехали",
    finalPhrases: [
      "😏 Отличный выбор! Заказывай и вступай в наш клуб.",
      "🎯 У тебя отличный вкус! Время присоединиться к нашему сообществу.",
      "☕ Вот твой результат! Купи кофе и регистрируйся в клубе.",
      "😉 О, тоже один из моих любимых! Скорее вступай в сообщество.",
      "✨ У тебя есть вкус к жизни! Делись и присоединяйся к клубу."
    ]
  },
  pl: {
    startTitle: "☕ Twój kawowy nastrój",
    startText: "Chcesz wiedzieć, jaka kawa pasuje do twojego nastroju? Sprawdźmy!",
    startBtn: "🚀 Start",
    finalPhrases: [
      "😏 Świetny wybór! Zamów teraz i dołącz do naszego klubu.",
      "🎯 Masz doskonały gust! Czas dołączyć do społeczności.",
      "☕ To jest wynik! Kup kawę i zarejestruj się w klubie.",
      "😉 Też jeden z moich ulubionych! Dołącz do naszej kawowej rodziny.",
      "✨ Masz świetny smak! Podziel się nim i dołącz do klubu."
    ]
  }
};

// --- Вибір мови ---
let lang = navigator.language.slice(0, 2);
if (!translations[lang]) lang = "en";

// --- Антикеш + реферал ---
const ref = new URLSearchParams(window.location.search).get("ref") || "default";
function adjustLink(link) {
  const ts = Date.now();
  return `${link}?ref=${ref}&_=${ts}`;
}

// --- Змінні логіки ---
let currentQ = 0;
let userProfile = {};
let selectedMethod = null;
let selectedDrink = null;

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");

// --- Додати теги ---
function addTags(tags) {
  for (const [key, value] of Object.entries(tags)) {
    if (!userProfile[key]) userProfile[key] = 0;
    userProfile[key] += value;
  }
}

// --- Показати питання ---
function showQuestion() {
  if (
    selectedMethod === "filter" &&
    questions[currentQ].answers.some(a => a.drink)
  ) {
    showResult();
    return;
  }

  quizEl.innerHTML = `<h2>${questions[currentQ].text[lang]}</h2>`;
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  questions[currentQ].answers.forEach(a => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML = `<img src="${a.img}" alt=""><p>${a.text[lang]}</p>`;
    card.onclick = () => {
      if (a.tags) addTags(a.tags);
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

// --- Показати результат ---
function showResult() {
  let coffees = [...coffeeProfiles];

  if (selectedMethod === "filter") {
    const filterCoffees = coffees.filter(c => c.category === "filter");
    const main = filterCoffees[0];
    const alt = filterCoffees[1];

    let html = `
      <h2>${translations[lang].startTitle}</h2>
      <h3>${main.name}</h3>
      <img src="${main.img}" alt="${main.name}">
      <div class="final-phrase">${translations[lang].finalPhrases[Math.floor(Math.random() * translations[lang].finalPhrases.length)]}</div>
      <a href="${adjustLink(main.link)}" target="_blank"><button>☕ ${translations[lang].startBtn}</button></a>
    `;

    if (alt) {
      html += `<h3>✨ ${lang === "uk" ? "Вам також може сподобатися:" : "You may also like:"}</h3>
      <div class="gallery">
        <a href="${adjustLink(alt.link)}" target="_blank" class="gallery-item">
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
    <h2>${translations[lang].startTitle}</h2>
    <h3>${mainCoffee.name}</h3>
    <img src="${mainCoffee.img}" alt="${mainCoffee.name}">
    <div class="final-phrase">${translations[lang].finalPhrases[Math.floor(Math.random() * translations[lang].finalPhrases.length)]}</div>
    <a href="${adjustLink(mainCoffee.link)}" target="_blank"><button>☕ ${translations[lang].startBtn}</button></a>
  `;

  if (recommendations.length > 0) {
    html += `<h3>✨ ${lang === "uk" ? "Вам також може сподобатися:" : "You may also like:"}</h3><div class="gallery">`;
    recommendations.forEach(c => {
      html += `
        <a href="${adjustLink(c.link)}" target="_blank" class="gallery-item">
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

// --- Старт ---
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizEl.classList.remove("hidden");
  currentQ = 0;
  userProfile = {};
  selectedMethod = null;
  selectedDrink = null;
  showQuestion();
});