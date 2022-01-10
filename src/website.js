import homeLoad from "./home";
import menuLoad from "./menu";
import contactLoad from "./contact";

function createHeader(){
    const header = document.createElement('header');
    const restoName = document.createElement('h1');

    restoName.classList.add('restaurant-name');
    restoName.textContent = "Midnight Pretenders";
    header.appendChild(restoName);
    header.appendChild(createNav());

    return header;
}

function createNav(){
    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add('button-nav');
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeBtn);
        homeLoad();
    })

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('button-nav');
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuBtn);
        menuLoad();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('button-nav');
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactBtn);
        contactLoad();
    })

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav
}

function createMain(){
    const main = document.createElement('main');

    main.classList.add('main');
    main.setAttribute('id', 'main');

    return main;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createFooter(){
    const footer = document.createElement('footer');

    footer.classList.add('footer');
    footer.textContent = "Copyright Molikuc";

    return footer;
}

function pageLoad() {
   const content = document.getElementById('content');

   content.appendChild(createHeader());
   content.appendChild(createMain());
   content.appendChild(createFooter());

   console.log("I'm a statement");
   setActiveButton(document.querySelector(".button-nav"));
   homeLoad();
 }

export default pageLoad;