let hamburger = document.querySelector(".hamburger");
let closeBtn = document.querySelector(".closeBtn");
let navbarItems = document.querySelector(".navbarItems");
let desktopNavbar = document.querySelector(".desktopNavbar");
let navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", function () {
    navbarItems.classList.remove("hide");
    navbarItems.classList.add("mobileNavbarItems");
    desktopNavbar.classList.add("mobileNavbar");
    navbar.classList.add("overlay");
    hamburger.classList.add("hide");
    closeBtn.classList.remove("hide");
})

closeBtn.addEventListener("click", function () {
    navbarItems.classList.add("hide");
    navbarItems.classList.remove("mobileNavbarItems");
    desktopNavbar.classList.remove("mobileNavbar");
    navbar.classList.remove("overlay");
    hamburger.classList.remove("hide");
    closeBtn.classList.add("hide");
})

