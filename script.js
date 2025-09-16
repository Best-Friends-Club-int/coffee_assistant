// --- Language (default EN) ---
let userLang = "en";
function selectLanguage(lang) {
  userLang = lang;

  // сховати екран мов
  document.getElementById("lang-screen").classList.add("hidden");

  // підставити тексти стартового екрану
  const startScreen = document.getElementById("start-screen");
  startScreen.querySelector("h2").textContent = startTranslations[lang].title;
  startScreen.querySelector("p").textContent = startTranslations[lang].text;
  document.getElementById("startBtn").textContent = startTranslations[lang].button;
  document.getElementById("main-title").textContent = startTranslations[lang].mainTitle;

  // показати стартовий
  startScreen.classList.remove("hidden");
}
// зробити доступним для inline onclick у index.html
window.selectLanguage = selectLanguage;

// --- Start screen translations ---
const startTranslations = {
  uk: { mainTitle:"Твій кавовий настрій",title:"🤖 Наш кавовий AI-асистент допоможе знайти саме те, що тобі треба☕️",text:"Хочеш дізнатись, яка кава пасує саме твоєму настрою? Ми підкинемо ідею!",button:"🚀 Почати"},
  en: { mainTitle:"Your Coffee Mood",title:"🤖 Our coffee AI assistant will help you find exactly what you need☕️",text:"Want to know which coffee matches your mood? We'll give you a hint!",button:"🚀 Let's go"},
  es: { mainTitle:"Tu estado de ánimo cafetero",title:"🤖 Nuestro asistente de café con IA te ayudará a encontrar justo lo que necesitas☕️",text:"¿Quieres saber qué café combina con tu estado de ánimo? ¡Te daremos una idea!",button:"🚀 Empezar"},
  ru: { mainTitle:"Твоё кофейное настроение",title:"🤖 Наш кофейный AI-ассистент поможет найти именно то, что тебе нужно☕️",text:"Хочешь узнать, какой кофе подходит твоему настроению? Мы подскажем идею!",button:"🚀 Начать"},
  pl: { mainTitle:"Twój kawowy nastrój",title:"🤖 Nasz kawowy asystent AI pomoże Ci znaleźć dokładnie to, czego potrzebujesz☕️",text:"Chcesz wiedzieć, jaka kawa pasuje do Twojego nastroju? Podpowiemy Ci pomysł!",button:"🚀 Zaczynamy"}
};

// --- End phrases ---
const endPhrases = {
  uk:["😏 Чудовий вибір! Замов і зареєструйся в нашому клубі, щоб отримати ще більше!","🎯 У тебе чудовий смак!","☕ Оце результат!","😉 А тепер мершій реєструватися!","✨ У тебе є смак до життя!"],
  en:["😏 Great choice!","🎯 You’ve got great taste!","☕ That’s the result!","😉 One of my favorites too!","✨ You clearly have a taste for life!"],
  es:["😏 ¡Gran elección!","🎯 ¡Tienes un gran gusto!","☕ ¡Ese es el resultado!","😉 ¡También uno de mis favoritos!","✨ ¡Tienes buen gusto por la vida!"],
  ru:["😏 Отличный выбор!","🎯 У тебя отличный вкус!","☕ Вот результат!","😉 И это один из моих любимых!","✨ У тебя есть вкус к жизни!"],
  pl:["😏 Świetny wybór!","🎯 Masz świetny gust!","☕ Oto wynik!","😉 To też jeden z moich ulubionych!","✨ Masz smak do życia!"]
};

// --- Questions (fun + key) ---
const questions = [
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

// --- Coffee profiles ---
const coffeeProfiles = [
  {name:"Ethiopia Gedeb 250g",img:"images/ethiopia_gadeb.png",link:"https://bfc24.com/store/product/26",tags:{fruit:2,filter:3,americano:1},category:"filter"},
  {name:"Kenya AA Gikanda Kangocho 250g",img:"images/kenya_aa.png",link:"https://bfc24.com/store/product/27",tags:{fruit:2,filter:3,americano:1},category:"filter"},
  {name:"Brazil Mogiana 250g",img:"images/brazil_mogiana.png",link:"https://bfc24.com/store/product/21",tags:{choco:2,espresso:3,milk:2,cappuccino:2,moka:1}},
  {name:"Colombia Excelso 250g",img:"images/colombia_excleso.png",link:"https://bfc24.com/store/product/12",tags:{choco:2,espresso:2,milk:1,moka:1}},
  {name:"Arabica Midday 250g",img:"images/midday.png",link:"https://bfc24.com/store/product/10",tags:{dessert:2,espresso:2,milk:2,cappuccino:2,moka:1}},
  {name:"Arabica Midnight 250g",img:"images/midnight.png",link:"https://bfc24.com/store/product/6",tags:{choco:1,dessert:2,espresso:2,americano:1,immersion:1}},
  {name:"Arabica Sunrise 250g",img:"images/sunrise.png",link:"https://bfc24.com/store/product/9",tags:{dessert:2,espresso:2,americano:1,milk:1,immersion:1,moka:1}},
  {name:"Arabusta Dark 250g",img:"images/dark.png",link:"https://bfc24.com/store/product/4",tags:{dark:3,espresso:3,cappuccino:2,moka:2}},
  {name:"Arabusta Amber 250g",img:"images/amber.png",link:"https://bfc24.com/store/product/5",tags:{dark:2,espresso:2,milk:2,cappuccino:2,americano:1,moka:1}},
  {name:"Decaf Colombia Huila 250g",img:"images/columbia_decaf.png",link:"https://bfc24.com/store/product/19",tags:{classic:2,espresso:2,milk:1,cappuccino:1,americano:1,immersion:1}},
  {name:"Ethiopia Aleta Wondo 250g",img:"images/ethiopia_aleta.png",link:"https://bfc24.com/store/product/32",tags:{fruit:2,filter:2,espresso:1},category:"filter"}, // fixed link (was duplicate)
  {name:"Brazil Fazenda Pedra Grande 250g",img:"images/brazil_fazenda.png",link:"https://bfc24.com/store/product/23",tags:{choco:2,espresso:2,moka:1}},
  {name:"Colombia Cauca Popayan 250g",img:"images/colombia_cauca.png",link:"https://bfc24.com/store/product/25",tags:{choco:2,fruit:1,espresso:2}},
  {name:"Mexico El Buho 250g",img:"images/mexico_el_buho.png",link:"https://bfc24.com/store/product/22",tags:{choco:1,dark:1,espresso:2,americano:1}}
];

// --- Logic ---
let currentQ = 0;
let userProfile = {};
let selectedMethod = null;
let selectedDrink = null;

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");

function addTags(tags){
  for(const [k,v] of Object.entries(tags)){
    if(!userProfile[k]) userProfile[k]=0;
    userProfile[k]+=v;
  }
}

function showQuestion(){
  // якщо метод = фільтр і поточне питання — про напій → пропускаємо напої, показуємо результат
  if(selectedMethod==="filter" && questions[currentQ].answers.some(a=>a.drink)){
    showResult(); return;
  }

  quizEl.innerHTML = `<h2>${questions[currentQ].text[userLang]}</h2>`;
  const g = document.createElement("div");
  g.className = "gallery";

  questions[currentQ].answers.forEach(a=>{
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML = `<img src="${a.img}?t=${Date.now()}" alt=""><p>${a.text[userLang]}</p>`;
    card.onclick = ()=>{
      if(a.tags) addTags(a.tags);
      if(a.method) selectedMethod = a.method;
      if(a.drink) selectedDrink = a.drink;

      currentQ++;
      if(currentQ < questions.length){ showQuestion(); }
      else { showResult(); }
    };
    g.appendChild(card);
  });

  quizEl.appendChild(g);
}

function showResult(){
  let coffees = [...coffeeProfiles];

  // суворе правило для фільтру: показуємо лише фільтр-кави
  if(selectedMethod === "filter"){
    coffees = coffees.filter(c=>c.category==="filter");
  }

  // якщо молочні напої → не показуємо фільтр-лоти
  if(selectedDrink==="milk" || selectedDrink==="cappuccino"){
    coffees = coffees.filter(c=>c.category!=="filter");
  }

  // для еспресо фільтр майже не показуємо (10% шанс)
  if(selectedDrink==="espresso"){
    if(Math.random()>0.1){
      coffees = coffees.filter(c=>c.category!=="filter");
    }
  }

  // підрахунок балів
  const ranked = coffees.map(c=>{
    let s=0;
    for(const [tag,weight] of Object.entries(userProfile)){
      if(c.tags[tag]) s += Math.min(weight, c.tags[tag]);
    }
    return {...c, score:s};
  }).sort((a,b)=>b.score-a.score);

  const main = ranked[0];
  const rec = ranked.slice(1,3);

  let html = `
    <h2>${main.name}</h2>
    <img src="${main.img}?t=${Date.now()}" alt="${main.name}">
    <div class="final-phrase">${endPhrases[userLang][Math.floor(Math.random()*endPhrases[userLang].length)]}</div>
    <a href="${main.link}?ref=quiz&t=${Date.now()}" target="_blank">
      <button>☕ ${userLang==="uk" ? "Замовити" : "Order"}</button>
    </a>
  `;

  if(rec.length>0){
    html += `<h3>✨ ${userLang==="uk" ? "Вам також може сподобатися:" : "You may also like:"}</h3><div class="gallery">`;
    rec.forEach(c=>{
      html += `
        <a href="${c.link}?ref=quiz&t=${Date.now()}" target="_blank" class="gallery-item">
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

// старт після кліку
startBtn.addEventListener("click", ()=>{
  startScreen.classList.add("hidden");
  quizEl.classList.remove("hidden");
  currentQ = 0; userProfile = {}; selectedMethod = null; selectedDrink = null;
  showQuestion();
});