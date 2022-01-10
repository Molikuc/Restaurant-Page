function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add("menu");

    menu.appendChild(
        createItem(
            "Ramen",
            "Ramen with chicken or anything else, so good"
        ));

    menu.appendChild(
        createItem(
            "Takoyaki",
            "Octopus balls, ball shaped snack, delicious"
        )
    );

    menu.appendChild(
        createItem(
            "Sushi",
            "The famous Japanese dish, with fish"
        )
    );

    menu.appendChild(
        createItem(
            "Yakitori",
            "The Japanese type of skewered chicken, enjoy it",
        )
    );

        return menu;
}

function createItem(name, description){
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("H2");
    itemName.textContent = name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    const itemImage = document.createElement('img');
    itemImage.src = `images/${name.toLowerCase()}.jpg`;
    itemImage.alt = `${name}`;

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function menuLoad(){
    const main = document.getElementById('main');
    main.textContent ="";
    main.appendChild(createMenu());
}

export default menuLoad;