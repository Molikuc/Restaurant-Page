function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const tel = document.createElement('p');
    tel.textContent = "123 456 789";

    const address = document.createElement('p');
    address.textContent = "Nice Boulevard 42, Sweet City";

    contact.appendChild(tel);
    contact.appendChild(address);

    return contact;
}

function contactLoad(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default contactLoad