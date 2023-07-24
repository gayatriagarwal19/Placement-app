function toggleMenu() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
  
    var hamburgerDropdown = document.querySelector('.hamburger-dropdown');
    hamburgerDropdown.classList.toggle('show');
  }

const navbar = document.getElementById('navbar');
const scrollThreshold = 100;


function handleScroll() {
  if (window.scrollY >= scrollThreshold) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
}
window.addEventListener('scroll', handleScroll);
  
  