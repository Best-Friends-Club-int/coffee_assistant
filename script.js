// --- Фрази для фіналу ---
const endPhrases = [
  "😏 Чудовий вибір! Замов і зареєструйся в нашому клубі, щоб отримати ще більше!",
  "🎯 У тебе чудовий смак! Час замовити каву та приєднатися до нашої спільноти!",
  "☕ Оце результат! Тепер справа за малим — придбай каву та реєструйся в нашому клубі кавових ентузіастів.",
  "😉 О, також одна з моїх улюблених! А тепер мершій реєструватися до нашої міжнародної спільноти кавоманів!",
  "✨ У тебе є смак до життя, однозначно! Розділи свій досвід з нами та реєструйся до нашого клубу!"
];

// --- referral ---
let referralId = new URLSearchParams(window.location.search).get("ref");
if (referralId) {
  localStorage.setItem("referralId", referralId);
} else {
  referralId = localStorage.getItem("referralId") || "default";
}

// --- визначення країни ---
async function getUserCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.country_code;
  } catch {
    return "UA";
  }
}

// --- побудова посилання ---
function buildLink(link, country) {
  const clean = country === "UA" ? link : link.replace("/uk", "");
  const ts = Date.now(); // анти-кеш
  return `${clean}?ref=${referralId}&t=${ts}`;
}

// --- асортимент кави ---
const coffeeProfiles = [
  { name: "Ethiopia Gedeb 250g", img: "images/ethiopia_gadeb.png", link: "https://bfc24.com/uk/store/product/43", tags: { fruit: 2, filter: 3, americano: 1 }, category: "filter" },
  { name: "Kenya AA Gikanda Kangocho 250g", img: "images/kenya_aa.png", link: "https://bfc24.com/uk/store/product/39", tags: { fruit: 2, filter: 3, americano: 1 }, category: "filter" },
  { name: "Brazil Mogiana 250g", img: "images/brazil_mogiana.png", link: "https://bfc24.com/uk/store/product/33", tags: { choco: 2, espresso: 3, milk: 2, cappuccino: 2, moka: 1 } },
  { name: "Colombia Excelso 250g", img: "images/colombia_excelso.png", link: "https://bfc24.com/uk/store/product/35", tags: { choco: 2, espresso: 2, milk: 1, moka: 1 } },
  { name: "Arabica Midday 250g", img: "images/midday.png", link: "https://bfc24.com/uk/store/product/45", tags: { dessert: 2, espresso: 2, milk: 2, cappuccino: 2, moka: 1 } },
  { name: "Arabica Midnight 250g", img: "images/midnight.png", link: "https://bfc24.com/uk/store/product/31", tags: { choco: 1, dessert: 2, espresso: 2, americano: 1, immersion: 1 } },
  { name: "Arabica Sunrise 250g", img: "images/sunrise.png", link: "https://bfc24.com/uk/store/product/36", tags: { dessert: 2, espresso: 2, americano: 1, milk: 1, immersion: 1, moka: 1 } },
  { name: "Arabusta Dark 250g", img: "images/dark.png", link: "https://bfc24.com/uk/store/product/29", tags: { dark: 3, espresso: 3, cappuccino: 2, moka: 2 } },
  { name: "Arabusta Amber 250g", img: "images/amber.png", link: "https://bfc24.com/uk/store/product/30", tags: { dark: 2, espresso: 2, milk: 2, cappuccino: 2, americano: 1, moka: 1 } },
  { name: "Decaf Colombia Huila 250g", img: "images/columbia_decaf.png", link: "https://bfc24.com/uk/store/product/34", tags: { classic: 2, espresso: 2, milk: 1, cappuccino: 1, americano: 1, immersion: 1 } },
  { name: "Ethiopia Aleta Wondo 250g", img: "images/ethiopia_aleta.png", link: "https://bfc24.com/uk/store/product/32", tags: { fruit: 2, filter: 2, espresso: 1 } },
  { name: "Brazil Fazenda Pedra Grande 250g", img: "images/brazil_fazenda.png", link: "https://bfc24.com/uk/store/product/41", tags: { choco: 2, espresso: 2, moka: 1 } },
  { name: "Colombia Cauca Popayan 250g", img: "images/colombia_cauca.png", link: "https://bfc24.com/uk/store/product/40", tags: { choco: 2, fruit: 1, espresso: 2 } },
  { name: "Mexico El Buho 250g", img: "images/mexico_el_buho.png", link: "https://bfc24.com/uk/store/product/38", tags: { choco: 1, dark: 1, espresso: 2, americano: 1 } }
];

// --- результати ---
async function showResult() {
  const country = await getUserCountry();

  // --- випадок: фільтр ---
  if (selectedMethod === "filter") {
    const filterCoffees = coffeeProfiles.filter(c => c.category === "filter");
    const main = filterCoffees[0];
    const alt = filterCoffees[1];

    let html = `
      <h2>Ваша кава — ${main.name}</h2>
      <img src="${main.img}" alt="${main.name}">
      <div class="final-phrase">${endPhrases[Math.floor(Math.random() * endPhrases.length)]}</div>
      <a href="${buildLink(main.link, country)}" target="_blank"><button>☕ Замовити</button></a>
    `;

    if (alt) {
      html += `<h3>✨ Вам також може сподобатися:</h3>
      <div class="gallery">
        <a href="${buildLink(alt.link, country)}" target="_blank" class="gallery-item">
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
  let coffees = [...coffeeProfiles];

  if (selectedDrink === "milk" || selectedDrink === "cappuccino") {
    coffees = coffees.filter(c => c.category !== "filter");
  }

  if (selectedDrink === "espresso") {
    if (Math.random() > 0.1) {
      coffees = coffees.filter(c => c.category !== "filter");
    }
  }

  // підрахунок
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
    <a href="${buildLink(mainCoffee.link, country)}" target="_blank"><button>☕ Замовити</button></a>
  `;

  if (recommendations.length > 0) {
    html += `<h3>✨ Вам також може сподобатися:</h3><div class="gallery">`;
    recommendations.forEach(c => {
      html += `
        <a href="${buildLink(c.link, country)}" target="_blank" class="gallery-item">
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
