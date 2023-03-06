const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');
const navbarItems = document.querySelector('.navbarItems');
const desktopNavbar = document.querySelector('.desktopNavbar');
const navbar = document.querySelector('.navbar');
const intro = document.querySelector('.intro');

hamburger.addEventListener("click", function () {
    navbarItems.classList.remove('hide');
    navbarItems.classList.add('mobileNavbarItems');
    desktopNavbar.classList.add('mobileNavbar');
    navbar.classList.add('overlay');
    hamburger.classList.add('hide');
    closeBtn.classList.remove('hide');
    intro.classList.add('blurred_intro');
});

closeBtn.addEventListener('click', function () {
    navbarItems.classList.add('hide');
    navbarItems.classList.remove('mobileNavbarItems');
    desktopNavbar.classList.remove('mobileNavbar');
    navbar.classList.remove('overlay');
    hamburger.classList.remove('hide');
    closeBtn.classList.add('hide');
    intro.classList.remove('blurred_intro');
});
