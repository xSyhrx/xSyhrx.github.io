// JavaScript (app.js)

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');
  const navLogo = document.querySelector('#navbar__logo');
  const menuItems = document.querySelectorAll('.navbar__links');

  // Display Mobile Menu
  const MobileMenu = () => {
    menuLinks.classList.toggle('active');
  }

  menu.addEventListener('click', MobileMenu);

   // Close mobile menu when clicking on an item
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuLinks.classList.remove('active');
    });
  });

  navLogo.addEventListener('click', () => {
    menuLinks.classList.remove('active');
  });

});
