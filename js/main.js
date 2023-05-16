
// Elementos HTML de index.html
const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart_li = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cards_container = document.querySelector('.cards-container');  

//Variables declaradas en este archivo
const product_list = [];

// Eventos de HTML
navbar_email.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart_li.addEventListener('click', toggleShoppingCartAside);

//Funciones

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

product_list.push({
    name: 'Bike',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
product_list.push({
    name: 'Shirt',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
product_list.push({
    name: 'Pants',
    price: 230,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 

// <!-- <div class="product-card">
//           <img
//             src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//             alt=""
//             class="product-image"
//           />
//           <div class="product-info">
//             <div>
//               <p>$120.00</p>
//               <p>Bike</p>
//             </div>

//             <figure>
//               <img src="/img/icons/bt_add_to_cart.svg" alt="" />
//             </figure>
//           </div>
//         </div> -->

function render_products(arr){
    for(product of arr){
        const product_card = document.createElement('div');
        const product_info = document.createElement('div');
        const product_img = document.createElement('img')
        const product_info_div = document.createElement('div');
        const product_price = document.createElement('p');
        const product_name = document.createElement('p');
        const product_info_figrue = document.createElement('figure');
        const product_img_card = document.createElement('img');
    
    
        product_card.classList.add('product-card');
        product_img.setAttribute('src', product.image);
        product_info.classList.add('product-info');
        product_price.innerText = '$' + product.price;
        product_name.innerText = product.name;
        product_img_card.setAttribute('src', '../img/icons/bt_add_to_cart.svg');
        
    
        
        product_info_div.append(product_price,product_name);
        product_info_figrue.append(product_img_card);
        product_info.append(product_info_div, product_info_figrue);
        product_card.append(product_img, product_info);
        cards_container.append(product_card);
    
    };
}

render_products(product_list);