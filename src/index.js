import homepageLoad from "./home.js";
import menupageLoad from "./menu.js";
import contactpageLoad from "./contact.js";

import "./style.css";

function clearContent() {
    const Content = document.querySelector('#content');
    let pageContent = document.querySelector(".page-content");
    if (pageContent){
        Content.removeChild(pageContent);
    }
};
 
let homebtn = document.querySelector('.home');
let menubtn = document.querySelector('.menu');
let contactbtn = document.querySelector('.contact');

homepageLoad();

homebtn.addEventListener('click', function(){
    console.log("clicked");
    clearContent();
    homepageLoad();
});

menubtn.addEventListener('click', function(){
    clearContent();
    menupageLoad();
});

contactbtn.addEventListener('click', function(){
    clearContent();
    contactpageLoad();
});

console.log("Hello Isaac Luka");

