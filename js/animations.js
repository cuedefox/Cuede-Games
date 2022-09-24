function inicializarElementos () {
    menu = document.querySelector("#menu");
    menuButton = document.querySelector(".menu-bars");
    menuItems = document.querySelector(".menu-items");
    linea1MenuBar = document.querySelector(".linea1-menu-bar");
    linea2MenuBar = document.querySelector(".linea2-menu-bar");
    linea3MenuBar = document.querySelector(".linea3-menu-bar");
}

function inicializarEventos () {
    menuButton.onclick = () => {
        animateBars();
        menuItems.classList.toggle("show");
    }
}

function animateBars() {
    linea1MenuBar.classList.toggle("activelinea1-menu-bar");
    linea2MenuBar.classList.toggle("activelinea2-menu-bar");
    linea3MenuBar.classList.toggle("activelinea3-menu-bar");
}

let menu;
let menuButton;
let menuItems;
let linea1MenuBar;
let linea2MenuBar;
let linea3MenuBar;

function main () {
    inicializarElementos();
    inicializarEventos();
}

main();