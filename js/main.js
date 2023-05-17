
// Elementos HTML de index.html
const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart_li = document.querySelector('.navbar-shopping-cart');
const shopping_cart_container = document.querySelector('#shopping-cart-container');
const cards_container = document.querySelector('.cards-container');  
const product_detail_container = document.querySelector('#product-detail');
const product_detail_close_icon = document.querySelector('.product-detail-close')
//Variables declaradas en este archivo
const product_list = [];

// Eventos de HTML
navbar_email.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart_li.addEventListener('click', toggleShoppingCartshopping_cart_container);
product_detail_close_icon.addEventListener('click', close_product_detail_aside)
//Funciones

function toggleDesktopMenu(){
    let isshopping_cart_containerShoppingClosed = shopping_cart_container.classList.contains('inactive');
    
    if(!isshopping_cart_containerShoppingClosed){
        shopping_cart_container.classList.add('inactive');
    }

    desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    let isShopping_cart_containerShoppingClosed = shopping_cart_container.classList.contains('inactive');
    let isProductDetailClosed = product_detail_container.classList.contains('inactive');

    if(!isShopping_cart_containerShoppingClosed){
        shopping_cart_container.classList.add('inactive');
    }

    if(!isProductDetailClosed){
        product_detail_container.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartshopping_cart_container(){

    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isProduct_detail_containerClosed = product_detail_container.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isProduct_detail_containerClosed){
        product_detail_container.classList.add('inactive');
    }

    shopping_cart_container.classList.toggle('inactive');
}

function open_product_detail_aside(){
    let isShopping_cart_containerShoppingClosed = shopping_cart_container.classList.contains('inactive');
    

    product_detail_container.classList.remove('inactive');
    if(!isShopping_cart_containerShoppingClosed){
        shopping_cart_container.classList.add('inactive');
    }
    
}

function close_product_detail_aside(){
    product_detail_container.classList.add('inactive');
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

        product_img.addEventListener('click',open_product_detail_aside);
        
    };
}

render_products(product_list);