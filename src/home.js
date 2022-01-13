function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const image = document.createElement("img");

    image.src = "./images/image.jpg";


    home.appendChild(createParagraph("Midnight Pretenders has the best Japanese food all around"));
    home.appendChild(createParagraph("Since 1789"));
    home.appendChild(image);
    home.appendChild(createParagraph('Please visit us'));

    return home;
}

function createParagraph(text){
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function homeLoad(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default homeLoad;