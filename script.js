<script>
// ======================
// Config: languages, UI
// ======================
const SUPPORTED_LANGS = ["uk","en","es","ru","pl"];

// --- стартові тексти ---
const startTranslations = {
  uk: { mainTitle:"Твій кавовий настрій", title:"🤖 Наш кавовий AI-асистент допоможе знайти саме те, що тобі треба☕️", text:"Хочеш дізнатись, яка кава пасує саме твоєму настрою? Ми підкинемо ідею!", button:"🚀 Почати" },
  en: { mainTitle:"Your Coffee Mood", title:"🤖 Our coffee AI assistant will help you find exactly what you need☕️", text:"Want to know which coffee matches your mood? We'll give you a hint!", button:"🚀 Let's go" },
  es: { mainTitle:"Tu estado de ánimo cafetero", title:"🤖 Nuestro asistente de café con IA te ayudará a encontrar justo lo que necesitas☕️", text:"¿Quieres saber qué café combina con tu estado de ánimo? ¡Te daremos una idea!", button:"🚀 Empezar" },
  ru: { mainTitle:"Твоё кофейное настроение", title:"🤖 Наш кофейный AI-ассистент поможет найти именно то, что тебе нужно☕️", text:"Хочешь узнать, какой кофе подходит твоему настроению? Мы подскажем идею!", button:"🚀 Начать" },
  pl: { mainTitle:"Twój kawowy nastrój", title:"🤖 Nasz kawowy asystent AI pomoże Ci znaleźć dokładnie to, czego potrzebujesz☕️", text:"Chcesz wiedzieć, jaka kawa pasuje do Twojego nastroju? Podpowiemy Ci pomysł!", button:"🚀 Zaczynamy" }
};

// --- фінальні фрази ---
const endPhrases = {
  uk: ["😏 Чудовий вибір! Замов і зареєструйся в нашому клубі, щоб отримати ще більше!","🎯 У тебе чудовий смак! Час замовити каву та приєднатися до нашої спільноти!","☕ Оце результат! Придбай каву та ставай учасником клубу кавових ентузіастів.","😉 А тепер мершій реєструватися до нашої міжнародної спільноти кавоманів!","✨ У тебе є смак до життя! Розділи досвід з нами у клубі!"],
  en: ["😏 Great choice! Order now and join our club for more perks!","🎯 You’ve got great taste! Time to order your coffee and join our community!","☕ That’s the result! Just one step left — grab your coffee and sign up!","😉 One of my favorites too! Join our international coffee club!","✨ You clearly have a taste for life! Share it with us in the club!"],
  es: ["😏 ¡Gran elección! Pide ahora y únete a nuestro club para más beneficios!","🎯 ¡Tienes un gran gusto! Hora de pedir tu café y unirte a la comunidad!","☕ ¡Ese es el resultado! Solo queda un paso: pide tu café y regístrate!","😉 ¡También uno de mis favoritos! Únete a nuestro club internacional de café!","✨ ¡Tienes buen gusto por la vida! Compártelo con nosotros en el club!"],
  ru: ["😏 Отличный выбор! Закажи и вступай в наш клуб, чтобы получить больше!","🎯 У тебя отличный вкус! Пора заказать кофе и присоединиться к сообществу!","☕ Вот результат! Остался один шаг — купи кофе и регистрируйся!","😉 И это один из моих любимых! Присоединяйся к международному клубу!","✨ У тебя есть вкус к жизни! Делись с нами в клубе!"],
  pl: ["😏 Świetny wybór! Zamów i dołącz do naszego klubu, aby zyskać więcej!","🎯 Masz świetny gust! Czas zamówić kawę i dołączyć do społeczności!","☕ Oto wynik! Został tylko jeden krok — zamów kawę i zapisz się!","😉 To też jeden z moich ulubionych! Dołącz do naszego międzynarodowego klubu kawowego!","✨ Masz smak do życia! Podziel się nim z nami w klubie!"]
};

// ======================
// Data: questions
// ======================
const questions = [
  // fun
  { text:{uk:"🍰 Улюблений десерт дитинства?",en:"🍰 Childhood favorite dessert?",es:"🍰 Postre favorito de la infancia?",ru:"🍰 Любимый десерт из детства?",pl:"🍰 Ulubiony deser z dzieciństwa?"},
    answers:[
      {text:{uk:"Шоколадний торт",en:"Chocolate cake",es:"Pastel de chocolate",ru:"Шоколадный торт",pl:"Tort czekoladowy"},tags:{choco:2,espresso:1},img:"images/dessert_choco.png"},
      {text:{uk:"Мармелад",en:"Marmalade",es:"Mermelada",ru:"Мармелад",pl:"Marmolada"},tags:{fruit:2,filter:1},img:"images/dessert_marmelad.png"},
      {text:{uk:"Халва",en:"Halva",es:"Halva",ru:"Халва",pl:"Chałwa"},tags:{dark:2,moka:1},img:"images/dessert_halva.png"},
      {text:{uk:"Медовик",en:"Honey cake",es:"Pastel de miel",ru:"Медовик",pl:"Miodownik"},tags:{dessert:2,espresso:1},img:"images/dessert_honey.png"}
    ]},
  { text:{uk:"🍊 Який фрукт твій улюблений?",en:"🍊 Your favorite fruit?",es:"🍊 Tu fruta favorita?",ru:"🍊 Твой любимый фрукт?",pl:"🍊 Twój ulubiony owoc?"},
    answers:[
      {text:{uk:"Ягода",en:"Berry",es:"Baya",ru:"Ягода",pl:"Jagoda"},tags:{fruit:2,filter:1},img:"images/fruit_berry.png"},
      {text:{uk:"Цитрус",en:"Citrus",es:"Cítrico",ru:"Цитрус",pl:"Cytrus"},tags:{fruit:2,filter:1},img:"images/fruit_citrus.png"},
      {text:{uk:"Яблуко/груша",en:"Apple/Pear",es:"Manzana/Pera",ru:"Яблоко/груша",pl:"Jabłko/gruszka"},tags:{choco:1},img:"images/fruit_apple.png"},
      {text:{uk:"Сухофрукти",en:"Dried fruits",es:"Frutos secos",ru:"Сухофрукты",pl:"Suszone owoce"},tags:{dark:2,moka:1},img:"images/fruit_dry.png"}
    ]},
  { text:{uk:"🌸 Які парфуми тобі ближчі?",en:"🌸 Which perfumes are closer to you?",es:"🌸 ¿Qué perfumes te gustan más?",ru:"🌸 Какие духи тебе ближе?",pl:"🌸 Jakie perfumy są ci bliższe?"},
    answers:[
      {text:{uk:"Квіткові",en:"Floral",es:"Florales",ru:"Цветочные",pl:"Kwiatowe"},tags:{fruit:2},img:"images/perfume_flower.png"},
      {text:{uk:"Свіжі цитрусові",en:"Fresh citrus",es:"Cítricos frescos",ru:"Свежие цитрусовые",pl:"Świeże cytrusy"},tags:{fruit:2,filter:1},img:"images/perfume_citrus.png"},
      {text:{uk:"Солодкі гурманські",en:"Sweet gourmand",es:"Dulces",ru:"Сладкие гурманские",pl:"Słodkie gourmand"},tags:{choco:2},img:"images/perfume_sweet.png"},
      {text:{uk:"Деревні/пряні",en:"Woody/spicy",es:"Amaderados/especiados",ru:"Древесные/пряные",pl:"Drzewne/pikantne"},tags:{dark:2},img:"images/perfume_wood.png"}
    ]},
  { text:{uk:"☀️ Яка сцена тобі ближча?",en:"☀️ Which scene is closer to you?",es:"☀️ ¿Qué escena te gusta más?",ru:"☀️ Какая сцена ближе тебе?",pl:"☀️ Jaka scena jest ci bliższa?"},
    answers:[
      {text:{uk:"Середземна фієста",en:"Mediterranean fiesta",es:"Fiesta mediterránea",ru:"Средиземная фиеста",pl:"Fiesta śródziemnomorska"},tags:{},img:"images/scene_fiesta.png"},
      {text:{uk:"Прогулянка після дощу",en:"Walk after rain",es:"Paseo después de la lluvia",ru:"Прогулка после дождя",pl:"Spacer po deszczu"},tags:{},img:"images/scene_rain.png"},
      {text:{uk:"Затишний плед і книга",en:"Cozy blanket & book",es:"Manta y libro",ru:"Уютный плед и книга",pl:"Koc i książka"},tags:{},img:"images/scene_book.png"},
      {text:{uk:"Ранковий коворкінг",en:"Morning coworking",es:"Coworking matutino",ru:"Утренний коворкинг",pl:"Poranny coworking"},tags:{},img:"images/scene_cowork.png"}
    ]},
  { text:{uk:"🍸 Який коктейль твій улюблений?",en:"🍸 Your favorite cocktail?",es:"🍸 Tu cóctel favorito?",ru:"🍸 Твой любимый коктейль?",pl:"🍸 Twój ulubiony koktajl?"},
    answers:[
      {text:{uk:"Апероль Шприц",en:"Aperol Spritz",es:"Aperol Spritz",ru:"Апероль Шприц",pl:"Aperol Spritz"},tags:{},img:"images/cocktail_aperol.png"},
      {text:{uk:"Мохіто",en:"Mojito",es:"Mojito",ru:"Мохито",pl:"Mojito"},tags:{},img:"images/cocktail_mojito.png"},
      {text:{uk:"Віскі-кола",en:"Whiskey-cola",es:"Whisky-cola",ru:"Виски-кола",pl:"Whiskey-cola"},tags:{},img:"images/cocktail_whiskey.png"},
      {text:{uk:"Еспресо мартіні",en:"Espresso martini",es:"Espresso martini",ru:"Эспрессо мартини",pl:"Espresso martini"},tags:{},img:"images/cocktail_espresso.png"}
    ]},
  { text:{uk:"🌿 Як ти любиш проводити вихідні?",en:"🌿 How do you prefer weekends?",es:"🌿 ¿Cómo prefieres pasar los fines de semana?",ru:"🌿 Как ты любишь проводить выходные?",pl:"🌿 Jak wolisz spędzać weekendy?"},
    answers:[
      {text:{uk:"Прогулянка",en:"Walk",es:"Paseo",ru:"Прогулка",pl:"Spacer"},tags:{},img:"images/weekend_nature.png"},
      {text:{uk:"Вечірка з друзями",en:"Party with friends",es:"Fiesta con amigos",ru:"Вечеринка с друзьями",pl:"Impreza z przyjaciółmi"},tags:{},img:"images/weekend_party.png"},
      {text:{uk:"Затишний день вдома",en:"Cozy day at home",es:"Día en casa",ru:"Уютный день дома",pl:"Przytulny dzień w domu"},tags:{},img:"images/weekend_home.png"},
      {text:{uk:"Подорож у нове місто",en:"Travel to a new city",es:"Viaje a una nueva ciudad",ru:"Путешествие в новый город",pl:"Podróż do nowego miasta"},tags:{},img:"images/weekend_trip.png"}
    ]},

  // ключові
  { text:{uk:"🫖 Який метод заварювання тобі ближче?",en:"🫖 Which brew method do you prefer?",es:"🫖 ¿Qué método de preparación prefieres?",ru:"🫖 Какой метод заваривания тебе ближе?",pl:"🫖 Jaki sposób parzenia wolisz?"},
    answers:[
      {text:{uk:"Фільтр (V60, Chemex)",en:"Filter (V60, Chemex)",es:"Filtro (V60, Chemex)",ru:"Фильтр (V60, Chemex)",pl:"Filtr (V60, Chemex)"},tags:{filter:3,fruit:1},method:"filter",img:"images/brew_filter.png"},
      {text:{uk:"Еспресо-машина",en:"Espresso machine",es:"Máquina de espresso",ru:"Эспрессо-машина",pl:"Ekspres do kawy"},tags:{espresso:3},method:"espresso",img:"images/brew_espresso.png"},
      {text:{uk:"Гейзерна (Moka pot)",en:"Moka pot",es:"Moka pot",ru:"Гейзерная (Moka pot)",pl:"Kawiarka (Moka pot)"},tags:{moka:3,dark:1},method:"moka",img:"images/brew_moka.png"},
      {text:{uk:"Френч Прес",en:"French Press",es:"Prensa francesa",ru:"Френч-пресс",pl:"French Press"},tags:{immersion:3,dessert:1},method:"immersion",img:"images/brew_turkish.png"}
    ]},
  { text:{uk:"☕ Який кавовий напій тобі ближче?",en:"☕ Which coffee drink do you prefer?",es:"☕ ¿Qué bebida prefieres?",ru:"☕ Какой кофейный напиток тебе ближе?",pl:"☕ Jaki napój kawowy wolisz?"},
    answers:[
      {text:{uk:"Еспресо",en:"Espresso",es:"Espresso",ru:"Эспрессо",pl:"Espresso"},tags:{espresso:2},drink:"espresso",img:"images/drink_espresso.png"},
      {text:{uk:"Американо",en:"Americano",es:"Americano",ru:"Американо",pl:"Americano"},tags:{americano:2},drink:"americano",img:"images/drink_americano.png"},
      {text:{uk:"Американо з молоком",en:"Americano with milk",es:"Americano con leche",ru:"Американо с молоком",pl:"Americano z mlekiem"},tags:{milk:2},drink:"milk",img:"images/drink_milk.png"},
      {text:{uk:"Капучино",en:"Cappuccino",es:"Capuchino",ru:"Капучино",pl:"Cappuccino"},tags:{cappuccino:2,milk:2},drink:"cappuccino",img:"images/drink_cappuccino.png"}
    ]}
];

// ======================
// Data: coffee profiles
// ======================
const coffeeProfiles = [
  {name:"Ethiopia Gedeb 250g", img:"images/ethiopia_gadeb.png", link:"https://bfc24.com/store/product/26", tags:{fruit:2,filter:3,americano:1}, category:"filter"},
  {name:"Kenya AA Gikanda Kangocho 250g", img:"images/kenya_aa.png", link:"https://bfc24.com/store/product/27", tags:{fruit:2,filter:3,americano:1}, category:"filter"},
  {name:"Ethiopia Aleta Wondo 250g", img:"images/ethiopia_aleta.png", link:"https://bfc24.com/store/product/32", tags:{fruit:2,filter:2,espresso:1}, category:"filter"},

  {name:"Brazil Mogiana 250g", img:"images/brazil_mogiana.png", link:"https://bfc24.com/store/product/21", tags:{choco:2,espresso:3,milk:2,cappuccino:2,moka:1}},
  {name:"Colombia Excelso 250g", img:"images/colombia_excleso.png", link:"https://bfc24.com/store/product/12", tags:{choco:2,espresso:2,milk:1,moka:1}},
  {name:"Arabica Midday 250g", img:"images/midday.png", link:"https://bfc24.com/store/product/10", tags:{dessert:2,espresso:2,milk:2,cappuccino:2,moka:1}},
  {name:"Arabica Midnight 250g", img:"images/midnight.png", link:"https://bfc24.com/store/product/6",  tags:{choco:1,dessert:2,espresso:2,americano:1,immersion:1}},
  {name:"Arabica Sunrise 250g", img:"images/sunrise.png", link:"https://bfc24.com/store/product/9",  tags:{dessert:2,espresso:2,americano:1,milk:1,immersion:1,moka:1}},
  {name:"Arabusta Dark 250g", img:"images/dark.png", link:"https://bfc24.com/store/product/4",   tags:{dark:3,espresso:3,cappuccino:2,moka:2}},
  {name:"Arabusta Amber 250g", img:"images/amber.png", link:"https://bfc24.com/store/product/5",  tags:{dark:2,espresso:2,milk:2,cappuccino:2,americano:1,moka:1}},
  {name:"Decaf Colombia Huila 250g", img:"images/columbia_decaf.png", link:"https://bfc24.com/store/product/19", tags:{classic:2,espresso:2,milk:1,cappuccino:1,americano:1,immersion:1}},
  {name:"Brazil Fazenda Pedra Grande 250g", img:"images/brazil_fazenda.png", link:"https://bfc24.com/store/product/23", tags:{choco:2,espresso:2,moka:1}},
  {name:"Colombia Cauca Popayan 250g", img:"images/colombia_cauca.png", link:"https://bfc24.com/store/product/25", tags:{choco:2,fruit:1,espresso:2}},
  {name:"Mexico El Buho 250g", img:"images/mexico_el_buho.png", link:"https://bfc24.com/store/product/22", tags:{choco:1,dark:1,espresso:2,americano:1}}
];

// ======================
// State
// ======================
let currentQ = 0;
let userProfile = {};
let selectedMethod = null;
let selectedDrink  = null;
let userLang = getInitialLang();

// DOM
const langScreen  = document.getElementById("lang-screen");
const startScreen = document.getElementById("start-screen");
const quizEl      = document.getElementById("quiz");
const resultEl    = document.getElementById("result");
const startBtn    = document.getElementById("startBtn");

// ======================
// Helpers
// ======================
function getInitialLang(){
  const stored = localStorage.getItem("lang");
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const nav = (navigator.language || "en").slice(0,2);
  return SUPPORTED_LANGS.includes(nav) ? nav : "en";
}

function applyStartTexts(lang){
  const mt = document.getElementById("main-title");
  if (mt) mt.textContent = startTranslations[lang].mainTitle;
  startScreen.querySelector("h2").textContent = startTranslations[lang].title;
  startScreen.querySelector("p").textContent  = startTranslations[lang].text;
  startBtn.textContent = startTranslations[lang].button;
}

function selectLanguage(lang){
  userLang = SUPPORTED_LANGS.includes(lang) ? lang : "en";
  localStorage.setItem("lang", userLang);
  if (langScreen) langScreen.classList.add("hidden");
  applyStartTexts(userLang);
  startScreen.classList.remove("hidden");
}

function addTags(tags){
  for (const [k,v] of Object.entries(tags||{})){
    if (!userProfile[k]) userProfile[k] = 0;
    userProfile[k] += v;
  }
}

function t(obj){
  // безпечно беремо текст: поточна мова → en → перше доступне значення
  if (obj[userLang]) return obj[userLang];
  if (obj.en)        return obj.en;
  const first = Object.values(obj)[0];
  return typeof first === "string" ? first : "";
}

// --- Referral & anti-cache ---
const REF_PARAM = "ref";
const DEFAULT_REF = "quiz";

(function persistRefAtLoad(){
  const ref = new URLSearchParams(location.search).get(REF_PARAM);
  if (ref) localStorage.setItem("ref", ref);
})();

function getRef(){
  const fromUrl = new URLSearchParams(location.search).get(REF_PARAM);
  const fromLS  = localStorage.getItem("ref");
  const ref = fromUrl || fromLS || DEFAULT_REF;
  localStorage.setItem("ref", ref);
  return ref;
}

function adjustLink(baseLink){
  const url = new URL(baseLink);
  url.searchParams.set(REF_PARAM, getRef());
  url.searchParams.set("t", Date.now().toString());
  return url.toString();
}

// ======================
// Quiz flow
// ======================
function showQuestion(){
  // якщо користувач вибрав filter → пропускаємо питання про напій
  if (selectedMethod === "filter" && questions[currentQ].answers.some(a=>a.drink)){
    showResult();
    return;
  }

  quizEl.innerHTML = `<h2>${t(questions[currentQ].text)}</h2>`;
  const g = document.createElement("div");
  g.className = "gallery";

  questions[currentQ].answers.forEach(a=>{
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML  = `
      <img src="${a.img}?t=${Date.now()}" alt="">
      <p>${t(a.text)}</p>
    `;
    card.onclick = ()=>{
      addTags(a.tags);
      if (a.method) selectedMethod = a.method;
      if (a.drink)  selectedDrink  = a.drink;

      currentQ++;
      if (currentQ < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    g.appendChild(card);
  });

  quizEl.appendChild(g);
}

function showResult(){
  let coffees = [...coffeeProfiles];

  // якщо метод = filter → показуємо рівно 2 фільтри (основний + другий)
  if (selectedMethod === "filter"){
    const filters = coffees.filter(c=>c.category === "filter");
    // підрахунок за профілем, щоб основний відповідав смакам
    const ranked = filters.map(c=>{
      let s = 0;
      for(const [tag,weight] of Object.entries(userProfile)){
        if (c.tags[tag]) s += Math.min(weight, c.tags[tag]);
      }
      return {...c, score:s};
    }).sort((a,b)=>b.score-a.score);

    const main = ranked[0] || filters[0];
    const alt  = ranked.find(x=>x.name !== main.name) || filters[1];

    let html = `
      <h2>${main.name}</h2>
      <img src="${main.img}?t=${Date.now()}" alt="${main.name}">
      <div class="final-phrase">${endPhrases[userLang][Math.floor(Math.random()*endPhrases[userLang].length)]}</div>
      <a href="${adjustLink(main.link)}" target="_blank" rel="noopener">
        <button>☕ ${userLang==="uk"?"Замовити":"Order"}</button>
      </a>
    `;

    if (alt){
      html += `
        <h3>✨ ${userLang==="uk"?"Вам також може сподобатися:":"You may also like:"}</h3>
        <div class="gallery">
          <a href="${adjustLink(alt.link)}" target="_blank" rel="noopener" class="gallery-item">
            <img src="${alt.img}?t=${Date.now()}" alt="${alt.name}">
            <p>${alt.name}</p>
          </a>
        </div>
      `;
    }

    resultEl.innerHTML = html;
    quizEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    return;
  }

  // у milk/cappuccino фільтр-кави не показуємо
  if (selectedDrink === "milk" || selectedDrink === "cappuccino"){
    coffees = coffees.filter(c=>c.category !== "filter");
  }
  // у espresso фільтр рідко (10%)
  if (selectedDrink === "espresso"){
    if (Math.random() > 0.1) coffees = coffees.filter(c=>c.category !== "filter");
  }

  // ранжування
  const ranked = coffees.map(c=>{
    let s = 0;
    for(const [tag,weight] of Object.entries(userProfile)){
      if (c.tags[tag]) s += Math.min(weight, c.tags[tag]);
    }
    return {...c, score:s};
  }).sort((a,b)=>b.score-a.score);

  const main = ranked[0];
  const rec  = ranked.slice(1,3);

  let html = `
    <h2>${main.name}</h2>
    <img src="${main.img}?t=${Date.now()}" alt="${main.name}">
    <div class="final-phrase">${endPhrases[userLang][Math.floor(Math.random()*endPhrases[userLang].length)]}</div>
    <a href="${adjustLink(main.link)}" target="_blank" rel="noopener">
      <button>☕ ${userLang==="uk"?"Замовити":"Order"}</button>
    </a>
  `;

  if (rec.length){
    html += `<h3>✨ ${userLang==="uk"?"Вам також може сподобатися:":"You may also like:"}</h3><div class="gallery">`;
    rec.forEach(c=>{
      html += `
        <a href="${adjustLink(c.link)}" target="_blank" rel="noopener" class="gallery-item">
          <img src="${c.img}?t=${Date.now()}" alt="${c.name}">
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

// ======================
// Boot
// ======================
document.addEventListener("DOMContentLoaded", () => {
  // якщо є екран мов — показуємо його; якщо нема — одразу стартовий з автодетектом
  if (langScreen) {
    // проставимо дефолтні тексти на старті на випадок, якщо юзер пропустить
    applyStartTexts(userLang);
    // кнопки вибору мов (мають атрибути data-lang)
    const langBtns = langScreen.querySelectorAll("[data-lang]");
    langBtns.forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const lang = btn.getAttribute("data-lang");
        selectLanguage(lang);
      });
    });
    // показати екран мов, приховати старт
    langScreen.classList.remove("hidden");
    startScreen.classList.add("hidden");
  } else {
    // без екрану мов — автоматичний текст і стартовий екран
    applyStartTexts(userLang);
    startScreen.classList.remove("hidden");
  }

  // старт кнопка
  if (startBtn){
    startBtn.addEventListener("click", ()=>{
      // скидання стану на випадок повторного запуску
      currentQ = 0;
      userProfile = {};
      selectedMethod = null;
      selectedDrink  = null;

      startScreen.classList.add("hidden");
      resultEl.classList.add("hidden");
      quizEl.classList.remove("hidden");
      showQuestion();
    });
  }
});
</script>