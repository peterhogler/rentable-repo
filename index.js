const navButtons = document.querySelector(".nav-buttons");
const hamburger = document.querySelector(".hamburger-button");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelector(".nav-menu");

let menuIsOpen = false;

navButtons.addEventListener("click", () => {
    menuIsOpen = !menuIsOpen;
    if (menuIsOpen) {
        menu.classList.add("is-open");
        hamburger.classList.add("is-hidden");
        closeButton.classList.remove("is-hidden");
    }
    if (!menuIsOpen) {
        hamburger.classList.remove("is-hidden");
        closeButton.classList.add("is-hidden");
        menu.classList.remove("is-open");
    }
});

window.addEventListener("resize", () => {
    menu.classList.remove("is-open");
    hamburger.classList.remove("is-hidden");
    closeButton.classList.add("is-hidden");
});
