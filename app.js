const mobileMenu = document.querySelector('#menu-mobile span');
const navbar = document.querySelector('.header .navbar');

mobileMenu.onclick = () => {
    navbar.classList.toggle('active')
}