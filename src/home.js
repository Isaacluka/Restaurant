const homepageLoad = () => {

//Body.style.backgroundColor = "#1f2c217c";
//Body.style.backgroundImage = "url('BgImage.jpg')";


let Content = document.querySelector('#content');

let pageContent = document.createElement("div");
pageContent.setAttribute("class", "page-content");

let Home = document.createElement("div");
Home.classList.add("home");

let HeroText = document.createElement("div");
HeroText.classList.add("heroText");

let Heroh1 = document.createElement("div");
Heroh1.setAttribute("class", "h1");

Heroh1.textContent = "Welcome to The Grand Continental, Abuja.";


let HomeCopy = document.createElement("div");
HomeCopy.classList.add('homeCopy');


let Copyh1 = document.createElement("div");
Copyh1.setAttribute("class", "h1");

Copyh1.textContent = "A Symphony of Flavors";

let Copyp1 = document.createElement("div");
Copyp1.setAttribute("class", "Copyp1");

let Copyp2 = document.createElement("div");
Copyp2.setAttribute("class", "Copyp2");

Copyp1.textContent = "At The Grand Continental, we believe food is an art, and every dish tells a story. Our world-class chefs draw inspiration from the rich culinary traditions of Europe, Asia, and Africa to create a menu that celebrates the diversity of global cuisine. From the buttery indulgence of French pastries to the bold spices of the Mediterranean, each plate is a masterpiece designed to delight your senses.";

Copyp2.textContent = "Whether you're savoring our signature truffle risotto, enjoying a perfectly grilled tomahawk steak, or indulging in our handcrafted desserts, every bite promises to be an unforgettable experience.";


//Home.textContent = "Hello World!";

HeroText.appendChild(Heroh1);


HomeCopy.appendChild(Copyh1);
HomeCopy.appendChild(Copyp1);
HomeCopy.appendChild(Copyp2);



Home.appendChild(HeroText);
Home.appendChild(HomeCopy);


pageContent.appendChild(Home);
Content.appendChild(pageContent);
};

export default homepageLoad;
