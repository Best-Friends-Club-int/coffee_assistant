// --- Фрази для фіналу ---
const endPhrases = [
  "😏 Чудовий вибір! Замов і зареєструйся в нашому клубі, щоб отримати ще більше!",
  "🎯 У тебе чудовий смак! Час замовити каву та приєднатися до нашої спільноти!",
  "☕ Оце результат! Тепер справа за малим — придбай каву та реєструйся в нашому клубі кавових ентузіастів.",
  "😉 О, також одна з моїх улюблених! А тепер мершій реєструватися до нашої міжнародної спільноти кавоманів!",
  "✨ У тебе є смак до життя, однозначно! Розділи свій досвід з нами та реєструйся до нашого клубу!"
];

// --- Питання ---
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

// --- Профілі кави ---
const coffeeProfiles = {
  fruit: {
    coffees: [
      { 
        name: "Ethiopia Gedeb 250g",
        link: "https://bfc24.com/uk/store/product/43",
        img: "images/ethiopia_gadeb.png",
        method: ["filter"],
        drinks: ["americano"],
        desc: "Соковиті ягоди чорниці, Earl Grey і медовий шлейф. Ідеальна для фільтру."
      },
      { 
        name: "Kenya AA Gikanda Kangocho 250g",
        link: "https://bfc24.com/uk/store/product/39",
        img: "images/kenya_aa.png",
        method: ["filter"],
        drinks: ["americano"],
        desc: "Чорна смородина, квіткові ноти й карамельний післясмак. Найкраще у V60."
      }
    ]
  },
  choco: {
    coffees: [
      { 
        name: "Brazil Mogiana 250g",
        link: "https://bfc24.com/uk/store/product/33",
        img: "images/brazil_mogiana.png",
        method: ["espresso","moka"],
        drinks: ["espresso","milk","cappuccino"],
        desc: "Молочний шоколад, горіхи та відтінки печива. Ідеальна для еспресо й молочних напоїв."
      },
      { 
        name: "Colombia Excelso 250g",
        link: "https://bfc24.com/uk/store/product/35",
        img: "images/colombia_excleso.png",
        method: ["espresso","moka"],
        drinks: ["espresso","milk"],
        desc: "Шоколад, горіх і цитрусова свіжість. Баланс для еспресо кави з молоком."
      }
    ]
  },
  dessert: {
    coffees: [
      { 
        name: "Arabica Midday 250g",
        link: "https://bfc24.com/uk/store/product/45",
        img: "images/midday.png",
        method: ["espresso","moka"],
        drinks: ["espresso","milk","cappuccino"],
        desc: "Нуга, шоколад і легка карамель. Чудова для капучино."
      },
      { 
        name: "Arabica Midnight 250g",
        link: "https://bfc24.com/uk/store/product/31",
        img: "images/midnight.png",
        method: ["espresso","immersion"],
        drinks: ["espresso","americano"],
        desc: "Мандарин, молочний шоколад і мигдаль. Гарний вибір для еспресо та американо."
      },
      { 
        name: "Arabica Sunrise 250g",
        link: "https://bfc24.com/uk/store/product/36",
        img: "images/sunrise.png",
        method: ["immersion","moka"],
        drinks: ["espresso","americano","milk"],
        desc: "Абрикос, чорнослив і темний шоколад. Розкривається у френч-пресі."
      }
    ]
  },
  dark: {
    coffees: [
      { 
        name: "Arabusta Dark 250g",
        link: "https://bfc24.com/uk/store/product/29",
        img: "images/dark.png",
        method: ["espresso","moka"],
        drinks: ["espresso","cappuccino"],
        desc: "Насичений шоколадно-горіховий смак із гірчинкою. Чудовий для еспресо та латте."
      },
      { 
        name: "Arabusta Amber 250g",
        link: "https://bfc24.com/uk/store/product/30",
        img: "images/amber.png",
        method: ["espresso","moka"],
        drinks: ["espresso","americano","milk","cappuccino"],
        desc: "М’яке какао, горіхи й солодкий післясмак. Гарна база як для чорної кави, так і для капучино."
      }
    ]
  },
  classic: {
    coffees: [
      { 
        name: "Decaf Colombia Huila 250g",
        link: "https://bfc24.com/uk/store/product/34",
        img: "images/columbia_decaf.png",
        method: ["espresso","immersion"],
        drinks: ["espresso","americano","milk","cappuccino"],
        desc: "Шоколад і горіхи без кофеїну. Ідеальна вечірня кава."
      }
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
      if (a.method) {
        selectedMethod = a.method;
        // якщо вибрали filter → одразу до результату
        if (selectedMethod === "filter") {
          showResult();
          return;
        }
      }
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
  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  let coffeeSet = coffeeProfiles[winner];

  // --- якщо filter ---
  if (selectedMethod === "filter") {
    const filtered = coffeeSet.coffees.filter(c => c.method.includes("filter"));
    const main = filtered[0];
    const alt = filtered[1];

    let html = `
      <h2>Ваша кава — ${main.name}</h2>
      <img src="${main.img}" alt="${main.name}">
      <p>${main.desc}</p>
      <div class="final-phrase">${endPhrases[Math.floor(Math.random() * endPhrases.length)]}</div>
      <a href="${main.link}" target="_blank">
        <button>☕ Замовити</button>
      </a>
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

  // --- стандартна логіка для інших методів ---
  let filteredCoffees = coffeeSet.coffees;

  // метод
  if (selectedMethod) {
    const match = filteredCoffees.filter(c => c.method.includes(selectedMethod));
    if (match.length > 0) filteredCoffees = match;
  }

  // напій
  if (selectedDrink) {
    const match = filteredCoffees.filter(c => c.drinks.includes(selectedDrink));
    if (match.length > 0) filteredCoffees = match;
  }

  const coffee = filteredCoffees[0];
  const phrase = endPhrases[Math.floor(Math.random() * endPhrases.length)];

  let html = `
    <h2>Ваша кава — ${coffee.name}</h2>
    <img src="${coffee.img}" alt="${coffee.name}">
    <p>${coffee.desc}</p>
    <div class="final-phrase">${phrase}</div>
    <a href="${coffee.link}" target="_blank">
      <button>☕ Замовити</button>
    </a>
  `;

  // додаткові рекомендації
  let otherCoffees = [];
  Object.keys(coffeeProfiles).forEach(key => {
    if (key !== winner) {
      let candidates = coffeeProfiles[key].coffees;
      if (selectedMethod) {
        const m = candidates.filter(c => c.method.includes(selectedMethod));
        if (m.length > 0) candidates = m;
      }
      if (selectedDrink) {
        const d = candidates.filter(c => c.drinks.includes(selectedDrink));
        if (d.length > 0) candidates = d;
      }
      if (selectedDrink !== "milk" && selectedDrink !== "cappuccino") {
        candidates.forEach(c => {
          if (!c.drinks.includes("milk") && !c.drinks.includes("cappuccino")) {
            otherCoffees.unshift(c);
          } else {
            otherCoffees.push(c);
          }
        });
      } else {
        otherCoffees = otherCoffees.concat(candidates);
      }
    }
  });

  const shuffled = otherCoffees.slice(0, 2);
  if (shuffled.length > 0) {
    html += `<h3>✨ Вам також може сподобатися:</h3><div class="gallery">`;
    shuffled.forEach(c => {
      html += `
        <a href="${c.link}" target="_blank" class="gallery-item">
          <img src="${c.img}" alt="${c.name}">
          <p>${c.name}</p>
        </a>
      `;
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