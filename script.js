// --- Визначення мови ---
let userLang = (navigator.language || navigator.userLanguage || "en").slice(0, 2);
if (!["uk", "en", "es", "ru", "pl"].includes(userLang)) userLang = "en";

// --- Переклади стартового екрану ---
const startTranslations = {
  uk: { title: "🤖 Наш кавовий AI-асистент допоможе знайти саме те, що тобі треба☕️", text: "Хочеш дізнатись, яка кава пасує саме твоєму настрою? Ми підкинемо ідею!", button: "🚀 Почати" },
  en: { title: "🤖 Our coffee AI assistant will help you find exactly what you need☕️", text: "Want to know which coffee matches your mood? We'll give you a hint!", button: "🚀 Let's go" },
  es: { title: "🤖 Nuestro asistente de café con IA te ayudará a encontrar justo lo que necesitas☕️", text: "¿Quieres saber qué café combina con tu estado de ánimo? ¡Te daremos una idea!", button: "🚀 Empezar" },
  ru: { title: "🤖 Наш кофейный AI-ассистент поможет найти именно то, что тебе нужно☕️", text: "Хочешь узнать, какой кофе подходит твоему настроению? Мы подскажем идею!", button: "🚀 Начать" },
  pl: { title: "🤖 Nasz kawowy asystent AI pomoże Ci znaleźć dokładnie to, czego potrzebujesz☕️", text: "Chcesz wiedzieć, jaka kawa pasuje do Twojego nastroju? Podpowiemy Ci pomysł!", button: "🚀 Zaczynamy" }
};

// --- Фрази для фіналу ---
const endPhrases = {
  uk: ["😏 Чудовий вибір! Замов і зареєструйся в нашому клубі, щоб отримати ще більше!", "🎯 У тебе чудовий смак! Час замовити каву та приєднатися до нашої спільноти!", "☕ Оце результат! Придбай каву та ставай учасником клубу кавових ентузіастів.", "😉 А тепер мершій реєструватися до нашої міжнародної спільноти кавоманів!", "✨ У тебе є смак до життя! Розділи досвід з нами у клубі!"],
  en: ["😏 Great choice! Order now and join our club for more perks!", "🎯 You’ve got great taste! Time to order your coffee and join our community!", "☕ That’s the result! Just one step left — grab your coffee and sign up!", "😉 One of my favorites too! Join our international coffee club!", "✨ You clearly have a taste for life! Share it with us in the club!"],
  es: ["😏 ¡Gran elección! Pide ahora y únete a nuestro club para más beneficios!", "🎯 ¡Tienes un gran gusto! Hora de pedir tu café y unirte a la comunidad!", "☕ ¡Ese es el resultado! Solo queda un paso: pide tu café y regístrate!", "😉 ¡También uno de mis favoritos! Únete a nuestro club internacional de café!", "✨ ¡Tienes buen gusto por la vida! Compártelo con nosotros en el club!"],
  ru: ["😏 Отличный выбор! Закажи и вступай в наш клуб, чтобы получить больше!", "🎯 У тебя отличный вкус! Пора заказать кофе и присоединиться к сообществу!", "☕ Вот результат! Остался один шаг — купи кофе и регистрируйся!", "😉 И это один из моих любимых! Присоединяйся к международному клубу!", "✨ У тебя есть вкус к жизни! Делись с нами в клубе!"],
  pl: ["😏 Świetny wybór! Zamów i dołącz do naszego klubu, aby zyskać więcej!", "🎯 Masz świetny gust! Czas zamówić kawę i dołączyć do społeczności!", "☕ Oto wynik! Został tylko jeden krok — zamów kawę i zapisz się!", "😉 To też jeden z moich ulubionych! Dołącz do naszego międzynarodowego klubu kawowego!", "✨ Masz smak do życia! Podziel się nim z nami w klubie!"]
};

// --- Питання ---
const questions = [
  {
    text: { uk: "🍰 Улюблений десерт дитинства?", en: "🍰 Childhood favorite dessert?", es: "🍰 Postre favorito de la infancia?", ru: "🍰 Любимый десерт из детства?", pl: "🍰 Ulubiony deser z dzieciństwa?" },
    answers: [
      { text: { uk: "Шоколадний торт", en: "Chocolate cake", es: "Pastel de chocolate", ru: "Шоколадный торт", pl: "Tort czekoladowy" }, tags: { choco: 2, espresso: 1 }, img: "images/dessert_choco.png" },
      { text: { uk: "Мармелад", en: "Marmalade", es: "Mermelada", ru: "Мармелад", pl: "Marmolada" }, tags: { fruit: 2, filter: 1 }, img: "images/dessert_marmelad.png" },
      { text: { uk: "Халва", en: "Halva", es: "Halva", ru: "Халва", pl: "Chałwa" }, tags: { dark: 2, moka: 1 }, img: "images/dessert_halva.png" },
      { text: { uk: "Медовик", en: "Honey cake", es: "Pastel de miel", ru: "Медовик", pl: "Miodownik" }, tags: { dessert: 2, espresso: 1 }, img: "images/dessert_honey.png" }
    ]
  },
  {
    text: { uk: "🫖 Який метод заварювання тобі ближче?", en: "🫖 Which brew method do you prefer?", es: "🫖 ¿Qué método de preparación prefieres?", ru: "🫖 Какой метод заваривания тебе ближе?", pl: "🫖 Jaki sposób parzenia wolisz?" },
    answers: [
      { text: { uk: "Фільтр (V60, Chemex)", en: "Filter (V60, Chemex)", es: "Filtro (V60, Chemex)", ru: "Фильтр (V60, Chemex)", pl: "Filtr (V60, Chemex)" }, tags: { filter: 3, fruit: 1 }, method: "filter", img: "images/brew_filter.png" },
      { text: { uk: "Еспресо-машина", en: "Espresso machine", es: "Máquina de espresso", ru: "Эспрессо-машина", pl: "Ekspres do kawy" }, tags: { espresso: 3 }, method: "espresso", img: "images/brew_espresso.png" },
      { text: { uk: "Гейзерна (Moka pot)", en: "Moka pot", es: "Moka pot", ru: "Гейзерная (Moka pot)", pl: "Kawiarka (Moka pot)" }, tags: { moka: 3, dark: 1 }, method: "moka", img: "images/brew_moka.png" },
      { text: { uk: "Френч Прес", en: "French Press", es: "Prensa francesa", ru: "Френч-пресс", pl: "French Press" }, tags: { immersion: 3, dessert: 1 }, method: "immersion", img: "images/brew_turkish.png" }
    ]
  },
  {
    text: { uk: "☕ Який кавовий напій тобі ближче?", en: "☕ Which coffee drink do you prefer?", es: "☕ ¿Qué bebida prefieres?", ru: "☕ Какой кофейный напиток тебе ближе?", pl: "☕ Jaki napój kawowy wolisz?" },
    answers: [
      { text: { uk: "Еспресо", en: "Espresso", es: "Espresso", ru: "Эспрессо", pl: "Espresso" }, tags: { espresso: 2 }, drink: "espresso", img: "images/drink_espresso.png" },
      { text: { uk: "Американо", en: "Americano", es: "Americano", ru: "Американо", pl: "Americano" }, tags: { americano: 2 }, drink: "americano", img: "images/drink_americano.png" },
      { text: { uk: "Американо з молоком", en: "Americano with milk", es: "Americano con leche", ru: "Американо с молоком", pl: "Americano z mlekiem" }, tags: { milk: 2 }, drink: "milk", img: "images/drink_milk.png" },
      { text: { uk: "Капучино", en: "Cappuccino", es: "Capuchino", ru: "Капучино", pl: "Cappuccino" }, tags: { cappuccino: 2, milk: 2 }, drink: "cappuccino", img: "images/drink_cappuccino.png" }
    ]
  }
];

// --- Профілі кави ---
const coffeeProfiles = [
  { name: "Ethiopia Gedeb 250g", img: "images/ethiopia_gadeb.png", link: "https://bfc24.com/uk/store/product/43", tags: { fruit: 2, filter: 3, americano: 1 }, category: "filter" },
  { name: "Kenya AA Gikanda Kangocho 250g", img: "images/kenya_aa.png", link: "https://bfc24.com/uk/store/product/39", tags: { fruit: 2, filter: 3, americano: 1 }, category: "filter" },
  { name: "Brazil Mogiana 250g", img: "images/brazil_mogiana.png", link: "https://bfc24.com/uk/store/product/33", tags: { choco: 2, espresso: 3, milk: 2, cappuccino: 2, moka: 1 } },
  { name: "Colombia Excelso 250g", img: "images/colombia_excleso.png", link: "https://bfc24.com/uk/store/product/35", tags: { choco: 2, espresso: 2, milk: 1, moka: 1 } },
  { name: "Arabica Midday 250g", img: "images/midday.png", link: "https://bfc24.com/uk/store/product/45", tags: { dessert: 2, espresso: 2, milk: 2, cappuccino: 2, moka: 1 } },
  { name: "Arabica Midnight 250g", img: "images/midnight.png", link: "https://bfc24.com/uk/store/product/31", tags: { choco: 1, dessert: 2, espresso: 2, americano: 1, immersion: 1 } },
  { name: "Arabica Sunrise 250g", img: "images/sunrise.png", link: "https://bfc24.com/uk/store/product/36", tags: { dessert: 2, espresso: 2, americano: 1, milk: 1, immersion: 1, moka: 1 } },
  { name: "Arabusta Dark 250g", img: "images/dark.png", link: "https://bfc24.com/uk/store/product/29", tags: { dark: 3, espresso: 3, cappuccino: 2, moka: 2 } },
  { name: "Arabusta Amber 250g", img: "images/amber.png", link: "https://bfc24.com/uk/store/product/30", tags: { dark: 2, espresso: 2, milk: 2, cappuccino: 2, americano: 1, moka: 1 } },
  { name: "Decaf Colombia Huila 250g", img: "images/columbia_decaf.png", link: "https://bfc24.com/uk/store/product/34", tags: { classic: 2, espresso: 2, milk: 1, cappuccino: 1, americano: 1, immersion: 1 } },
  { name: "Ethiopia Aleta Wondo 250g", img: "images/ethiopia_aleta.png", link: "https://bfc24.com/uk/store/product/32", tags: { fruit: 2, filter: 2, espresso: 1 }, category: "filter" },
  { name: "Brazil Fazenda Pedra Grande 250g", img: "images/brazil_fazenda.png", link: "https://bfc24.com/uk/store/product/41", tags: { choco: 2, espresso: 2, moka: 1 } },
  { name: "Colombia Cauca Popayan 250g", img: "images/colombia_cauca.png", link: "https://bfc24.com/uk/store/product/40", tags: { choco: 2, fruit: 1, espresso: 2 } },
  { name: "Mexico El Buho 250g", img: "images/mexico_el_buho.png", link: "https://bfc24.com/uk/store/product/38", tags: { choco: 1, dark: 1, espresso: 2, americano: 1 } }
];

// --- Логіка ---
let currentQ = 0;
let userProfile = {};
let selectedMethod = null;
let selectedDrink = null;

let userCountry = "UA";
fetch("https://ipapi.co/json/")
  .then(res => res.json())
  .then(data => { if (data && data.country_code) userCountry = data.country_code; })
  .catch(() => userCountry = "UA");

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");

// Заповнення стартового екрану перекладом
document.querySelector("#start-screen h2").textContent = startTranslations[userLang].title;
document.querySelector("#start-screen p").textContent = startTranslations[userLang].text;
document.getElementById("startBtn").textContent = startTranslations[userLang].button;

function addTags(tags) {
  for (const [key, value] of Object.entries(tags)) {
    if (!userProfile[key]) userProfile[key] = 0;
    userProfile[key] += value;
  }
}

function showQuestion() {
  if (selectedMethod === "filter" && questions[currentQ].answers.some(a => a.drink)) {
    showResult();
    return;
  }

  quizEl.innerHTML = `<h2>${questions[currentQ].text[userLang]}</h2>`;
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  questions[currentQ].answers.forEach(a => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML = `<img src="${a.img}?t=${Date.now()}"><p>${a.text[userLang]}</p>`;
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

function adjustLink(baseLink) {
  const ref = new URLSearchParams(window.location.search).get("ref") || "default";
  let link = baseLink;
  if (userCountry !== "UA") link = link.replace("/uk", "");
  return `${link}?ref=${ref}&t=${Date.now()}`;
}

function showResult() {
  let coffees = [...coffeeProfiles];

  if (selectedMethod === "filter") {
    const filterCoffees = coffees.filter(c => c.category === "filter");
    const main = filterCoffees[0];
    const alt = filterCoffees[1];

    let html = `
      <h2>${main.name}</h2>
      <img src="${main.img}?t=${Date.now()}" alt="${main.name}">
      <div class="final-phrase">${endPhrases[userLang][Math.floor(Math.random() * endPhrases[userLang].length)]}</div>
      <a href="${adjustLink(main.link)}" target="_blank"><button>☕ ${userLang === "uk" ? "Замовити" : "Order"}</button></a>
    `;

    if (alt) {
      html += `<h3>✨ ${userLang === "uk" ? "Вам також може сподобатися:" : "You may also like:"}</h3>
      <div class="gallery">
        <a href="${adjustLink(alt.link)}" target="_blank" class="gallery-item">
          <img src="${alt.img}?t=${Date.now()}" alt="${alt.name}">
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

  let scores = coffees.map(c => {
    let score = 0;
    for (const [tag, weight] of Object.entries(userProfile)) {
      if (c.tags[tag]) score += Math.min(weight, c.tags[tag]);
    }
    return { ...c, score };
  });

  scores.sort((a, b) => b.score - a.score);
  const mainCoffee = scores[0];
  const rec = scores.slice(1, 3);

  let html = `
    <h2>${mainCoffee.name}</h2>
    <img src="${mainCoffee.img}?t=${Date.now()}" alt="${mainCoffee.name}">
    <div class="final-phrase">${endPhrases[userLang][Math.floor(Math.random() * endPhrases[userLang].length)]}</div>
    <a href="${adjustLink(mainCoffee.link)}" target="_blank"><button>☕ ${userLang === "uk" ? "Замовити" : "Order"}</button></a>
  `;

  if (rec.length > 0) {
    html += `<h3>✨ ${userLang === "uk" ? "Вам також може сподобатися:" : "You may also like:"}</h3><div class="gallery">`;
    rec.forEach(c => {
      html += `
        <a href="${adjustLink(c.link)}" target="_blank" class="gallery-item">
          <img src="${c.img}?t=${Date.now()}" alt="${c.name}">
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