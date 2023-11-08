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

  // Highlight the active menu when scrolling
  const highLightMenu = () => {
    const element = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const projectsMenu = document.querySelector('#projects-page')
  
    let scrollPos = window.scrollY
  
    // adds the 'highLights' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600 ) {
      homeMenu.classList.add('highlight')
      aboutMenu.classList.remove('highlight')
      return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      aboutMenu.classList.add('highlight')
      homeMenu.classList.remove('highlight')
      projectsMenu.classList.remove('highlight')
      return
    }  else if (window.innerWidth > 960 && scrollPos < 2345) {
      projectsMenu.classList.add('highlight')
      aboutMenu.classList.remove('highlight')
      return
    }
  
    if((element && window.innerWidth < 960 && scrollPos < 600) || element) {
      element.classList.remove('highlight')
    }
  }
  window.addEventListener('scroll', highLightMenu)
  window.addEventListener('click', highLightMenu)
  

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
