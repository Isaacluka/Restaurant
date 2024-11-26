const contactpageLoad = () => {

    // const bgColor = "#1f2b21";

    // document.body.style.backgroundColor = bgColor;

    let Content = document.querySelector('#content');

    let pageContent = document.createElement("div");
    pageContent.setAttribute("class", "page-content");
    
    let contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contactDiv");

    let contactText = document.createElement("div");
    contactText.setAttribute("class", "contactText");

    let contactHeader = document.createElement("h1");
    contactHeader.setAttribute("class", "contactHeader");

    contactHeader.textContent = "Here We Are!";


    let contactPara1 = document.createElement("p");
    contactPara1.setAttribute("class", "contactPara");

    contactPara1.textContent = "The Grand Continental, Central Business District, Abuja, Nigeria."

    let contactPara2 = document.createElement("p");
    contactPara2.setAttribute("class", "contactPara");

    contactPara2.textContent = "+234 800 123 4567";

    let contactPara3 = document.createElement("p");
    contactPara3.setAttribute("class", "contactPara");

    contactPara3.textContent = "reservations@thegrandcontinental.ng";



    let contactImage = document.createElement("div");    
    contactImage.setAttribute("class", "contactImage");

    
    contactText.appendChild(contactHeader);
    contactText.appendChild(contactPara1);
    contactText.appendChild(contactPara2);
    contactText.appendChild(contactPara3);

    contactDiv.appendChild(contactText);
    contactDiv.appendChild(contactImage);

    pageContent.appendChild(contactDiv);
    Content.appendChild(pageContent);

};

export default contactpageLoad;