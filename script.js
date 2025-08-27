// --- Фрази для фіналу ---
const endPhrases = [
  "😏 Ну що, вгадали твій смак? Замов і перевір у чашці!",
  "🎯 Схоже, ми знайшли твою ідеальну каву. Час перевірити!",
  "☕ Тепер справа за малим — натисни і забери свою кавову пару.",
  "😉 А може ризикнеш і спробуєш саме цю?",
  "✨ Відчуй, чи справді це твоя кава — замов просто зараз!"
];

// --- Питання + відповіді + теги ---
const questions = [
  {
    text: "🍰 Улюблений десерт дитинства?",
    answers: [
      { text: "Шоколадний торт", tag: "choco", img: "images/dessert_choco.png" },
      { text: "Мармелад", tag: "fruit", img: "images/dessert_marmelad.png" },
      { text: "Халва", tag: "dark", img: "images/dessert_halva.png" },
      { text: "Медовик", tag: "dessert", img: "images/dessert_honey.png" }
    ]
  },
  {
    text: "🍊 Який фрукт твій улюблений?",
    answers: [
      { text: "Ягода", tag: "fruit", img: "images/fruit_berry.png" },
      { text: "Цитрус", tag: "fruit", img: "images/fruit_citrus.png" },
      { text: "Яблуко/груша", tag: "choco", img: "images/fruit_apple.png" },
      { text: "Сухофрукти", tag: "dark", img: "images/fruit_dry.png" }
    ]
  },
  {
    text: "🌸 Які парфуми тобі ближчі?",
    answers: [
      { text: "Квіткові", tag: "fruit", img: "images/perfume_flower.png" },
      { text: "Свіжі цитрусові", tag: "fruit", img: "images/perfume_citrus.png" },
      { text: "Солодкі гурманські", tag: "choco", img: "images/perfume_sweet.png" },
      { text: "Деревні/пряні", tag: "dark", img: "images/perfume_wood.png" }
    ]
  },
  {
    text: "☕ Яка сцена тобі ближча?",
    answers: [
      { text: "Середземна фієста", tag: "fruit", img: "images/scene_fiesta.png" },
      { text: "Прогулянка після дощу", tag: "fruit", img: "images/scene_rain.png" },
      { text: "Затишний плед і книга", tag: "choco", img: "images/scene_book.png" },
      { text: "Ранковий коворкінг", tag: "dark", img: "images/scene_cowork.png" }
    ]
  },
  {
    text: "🍸 Який коктейль твій улюблений?",
    answers: [
      { text: "Апероль Шприц", tag: "fruit", img: "images/cocktail_aperol.png" },
      { text: "Мохіто", tag: "dessert", img: "images/cocktail_mojito.png" },
      { text: "Віскі-кола", tag: "dark", img: "images/cocktail_whiskey.png" },
      { text: "Еспресо мартіні", tag: "choco", img: "images/cocktail_espresso.png" }
    ]
  },
  {
    text: "🌿 Як ти любиш проводити вихідні?",
    answers: [
      { text: "Прогулянка", tag: "fruit", img: "images/weekend_nature.png" },
      { text: "Вечірка з друзями", tag: "dark", img: "images/weekend_party.png" },
      { text: "Затишний день вдома", tag: "choco", img: "images/weekend_home.png" },
      { text: "Подорож у нове місто", tag: "dessert", img: "images/weekend_trip.png" }
    ]
  },
  {
    text: "🫖 Який метод заварювання тобі ближче?",
    answers: [
      { text: "Фільтр (V60, Chemex)", tag: "fruit", img: "images/brew_filter.png", method: "filter" },
      { text: "Еспресо-машина", tag: "choco", img: "images/brew_espresso.png", method: "espresso" },
      { text: "Гейзерна (Moka pot)", tag: "dark", img: "images/brew_moka.png", method: "moka" },
      { text: "Френч Прес, Чашка", tag: "dessert", img: "images/brew_turkish.png", method: "immersion" }
    ]
  },
  {
    text: "☕ Який кавовий напій тобі ближче?",
    answers: [
      { text: "Еспресо", tag: "espresso", img: "images/drink_espresso.png", drink: "espresso" },
      { text: "Американо", tag: "americano", img: "images/drink_americano.png", drink: "americano" },
      { text: "Американо з молоком", tag: "milk", img: "images/drink_milk.png", drink: "milk" },
      { text: "Капучино", tag: "cappuccino", img: "images/drink_cappuccino.png", drink: "cappuccino" }
    ]
  }
];

// --- Профілі кави (оновлені з методами + напоями) ---
const coffeeProfiles = {
  fruit: {
    desc: "Яскраві, фруктові, квіткові — для тих, хто любить кислинку 🌸",
    coffees: [
      { name: "Ethiopia Gedeb", link: "https://bfc24.com/uk/store/product/43", img: "images/ethiopia_gadeb.png", method: ["filter"], drinks: ["americano"] },
      { name: "Kenya AA Gikanda Kangocho", link: "https://bfc24.com/uk/store/product/39", img: "images/kenya_aa.png", method: ["filter"], drinks: ["espresso","americano"] }
    ]
  },
  choco: {
    desc: "Класика з шоколадом і горіхами 🍫",
    coffees: [
      { name: "Brazil Mogiana", link: "https://bfc24.com/uk/store/product/33", img: "images/brazil_mogiana.png", method: ["espresso","moka"], drinks: ["espresso","americano","milk","cappuccino"] },
      { name: "Colombia Excelso", link: "https://bfc24.com/uk/store/product/35", img: "images/colombia_excleso.png", method: ["espresso","filter"], drinks: ["espresso","americano","milk"] }
    ]
  },
  dessert: {
    desc: "Нуга, карамель, солодкий десерт у чашці 🍯",
    coffees: [
      { name: "Arabica Midday", link: "https://bfc24.com/uk/store/product/45", img: "images/midday.png", method: ["espresso","moka"], drinks: ["espresso","americano","milk","cappuccino"] },
      { name: "Arabica Midnight", link: "https://bfc24.com/uk/store/product/31", img: "images/midnight.png", method: ["filter","espresso"], drinks: ["espresso","americano"] },
      { name: "Arabica Sunrise", link: "https://bfc24.com/uk/store/product/36", img: "images/sunrise.png", method: ["immersion","filter"], drinks: ["americano","milk"] }
    ]
  },
  dark: {
    desc: "Насичена, темна, гірка як життя у понеділок ☠️",
    coffees: [
      { name: "Arabusta Dark", link: "https://bfc24.com/uk/store/product/29", img: "images/dark.png", method: ["espresso","moka"], drinks: ["espresso","americano","milk","cappuccino"] },
      { name: "Arabusta Amber", link: "https://bfc24.com/uk/store/product/30", img: "images/amber.png", method: ["espresso","moka"], drinks: ["espresso","americano","milk","cappuccino"] }
    ]
  },
  classic: {
    desc: "Той самий смак, але без кофеїну 🌙",
    coffees: [
      { name: "Decaf Colombia Huila", link: "https://bfc24.com/uk/store/product/34", img: "images/columbia_decaf.png", method: ["espresso","filter","immersion"], drinks: ["espresso","americano","milk","cappuccino"] }
    ]
  }
};

// --- Логіка ---
let currentQ = 0;
let scores = { fruit: 0, choco: 0, dessert: 0, dark: 0, classic: 0 };
let selectedMethod = null;
let selectedDrink = null;

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");

// показ питання
function showQuestion() {
  quizEl.innerHTML = `<h2>${questions[currentQ].text}</h2>`;
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  questions[currentQ].answers.forEach(a => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML = `<img src="${a.img}" alt="${a.text}"><p>${a.text}</p>`;
    card.onclick = () => {
      if (scores[a.tag] !== undefined) scores[a.tag]++;
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

// показ результату
function showResult() {
  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  const coffeeSet = coffeeProfiles[winner];

  // фільтр по методу і напою
  let filteredCoffees = coffeeSet.coffees;
  if (selectedMethod) {
    filteredCoffees = filteredCoffees.filter(c => c.method.includes(selectedMethod));
  }
  if (selectedDrink) {
    filteredCoffees = filteredCoffees.filter(c => c.drinks.includes(selectedDrink));
  }
  if (filteredCoffees.length === 0) {
    filteredCoffees = coffeeSet.coffees;
  }

  const coffee = filteredCoffees[Math.floor(Math.random() * filteredCoffees.length)];
  const phrase = endPhrases[Math.floor(Math.random() * endPhrases.length)];

  let html = `
    <h2>Ваша кава — ${coffee.name}</h2>
    <img src="${coffee.img}" alt="${coffee.name}">
    <p>${coffeeSet.desc}</p>
    <div class="final-phrase">${phrase}</div>
    <a href="${coffee.link}" target="_blank">
      <button>☕ Замовити</button>
    </a>
  `;

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