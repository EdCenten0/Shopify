const navbar_email = document.querySelector('.navbar-email')
const desktop_menu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbar_email.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktop_menu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
  }

