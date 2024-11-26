const menupageLoad = () => {

    document.body.style.backgroundColor = "white";
    let Content = document.querySelector('#content');

    let pageContent = document.createElement("div");
    pageContent.setAttribute("class", "page-content");
   // let menupage = document.createElement("div")
    //menupage.style.backgroundColor = "white";


    let textDiv = document.createElement("div");
    textDiv.setAttribute("class", "textDiv");
    textDiv.textContent = "Check Out our Elegant Menu.";
    
    let menuGrid = document.createElement("div");
    menuGrid.setAttribute("class", "menuGrid");

    // menuCard1
    let menuCard1 = document.createElement("div");
    menuCard1.setAttribute("class", "menuCard");

    let imgDiv1 = document.createElement("div");
    imgDiv1.setAttribute("class", "firstImgDiv");

    let capDiv1 = document.createElement("div");
    capDiv1.classList.add("capDiv");
    let cap1 = document.createElement("p");
    cap1.textContent = "Jollof Rice";

    capDiv1.appendChild(cap1);

    menuCard1.appendChild(imgDiv1);
    menuCard1.appendChild(capDiv1);

    // menuCard2
    let menuCard2 = document.createElement("div");
    menuCard2.setAttribute("class", "menuCard");

    let imgDiv2 = document.createElement("div");
    imgDiv2.setAttribute("class", "secondImgDiv");

    let capDiv2 = document.createElement("div");
    capDiv2.classList.add("capDiv");
    let cap2 = document.createElement("p");
    cap2.textContent = "Shrimp Spaghetti";

    capDiv2.appendChild(cap2);

    menuCard2.appendChild(imgDiv2);
    menuCard2.appendChild(capDiv2);

    // menuCard3
    let menuCard3 = document.createElement("div");
    menuCard3.setAttribute("class", "menuCard");

    let imgDiv3 = document.createElement("div");
    imgDiv3.setAttribute("class", "thirdImgDiv");

    let capDiv3 = document.createElement("div");
    capDiv3.classList.add("capDiv");
    let cap3 = document.createElement("p");
    cap3.textContent = "Bolognese Sauce";

    capDiv3.appendChild(cap3);

    menuCard3.appendChild(imgDiv3);
    menuCard3.appendChild(capDiv3);

    // menuCard4
    let menuCard4 = document.createElement("div");
    menuCard4.setAttribute("class", "menuCard");

    let imgDiv4 = document.createElement("div");
    imgDiv4.setAttribute("class", "forthImgDiv");

    let capDiv4 = document.createElement("div");
    capDiv4.classList.add("capDiv");
    let cap4 = document.createElement("p");
    cap4.textContent = "Ratatouille";

    capDiv4.appendChild(cap4);

    menuCard4.appendChild(imgDiv4);
    menuCard4.appendChild(capDiv4);

    // menuCard5
    let menuCard5 = document.createElement("div");
    menuCard5.setAttribute("class", "menuCard");

    let imgDiv5 = document.createElement("div");
    imgDiv5.setAttribute("class", "fifthImgDiv");

    let capDiv5 = document.createElement("div");
    capDiv5.classList.add("capDiv");
    let cap5 = document.createElement("p");
    cap5.textContent = "Shrimp Spaghetti";

    capDiv5.appendChild(cap5);

    menuCard5.appendChild(imgDiv5);
    menuCard5.appendChild(capDiv5);

    // menuCard6
    let menuCard6 = document.createElement("div");
    menuCard6.setAttribute("class", "menuCard");

    let imgDiv6 = document.createElement("div");
    imgDiv6.setAttribute("class", "sixthImgDiv");

    let capDiv6 = document.createElement("div");
    capDiv6.classList.add("capDiv");
    let cap6 = document.createElement("p");
    cap6.textContent = "Bolognese Sauce";

    capDiv6.appendChild(cap6);

    menuCard6.appendChild(imgDiv6);
    menuCard6.appendChild(capDiv6);

    menuGrid.appendChild(menuCard1);
    menuGrid.appendChild(menuCard2);
    menuGrid.appendChild(menuCard3);
    menuGrid.appendChild(menuCard4);
    menuGrid.appendChild(menuCard5);
    menuGrid.appendChild(menuCard6);

    pageContent.appendChild(textDiv);

    pageContent.appendChild(menuGrid); 

    Content.appendChild(pageContent);
};

export default menupageLoad;