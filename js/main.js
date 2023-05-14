const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart_li = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navbar_email.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart_li.addEventListener('click', toggleShoppingCartAside);

function toggleDesktopMenu(){
    let isAsideShoppingClosed = aside.classList.contains('inactive');
    
    if(!isAsideShoppingClosed){
        aside.classList.add('inactive');
    }

    desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    let isAsideShoppingClosed = aside.classList.contains('inactive');
    
    if(!isAsideShoppingClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside(){

    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isDekstopMenuClosed = desktop_menu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDekstopMenuClosed){
        desktop_menu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}