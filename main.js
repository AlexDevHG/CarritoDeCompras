const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click",toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleAside);
productDetailCloseIcon.addEventListener("click",closeProductDetail);

function toggleDesktopMenu() {
    shoppingCarContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    shoppingCarContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle("inactive");
}

function toggleAside(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCarContainer.classList.toggle("inactive");   
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCarContainer.classList.add('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://www.for-sale.co.uk/sh-img/Ribble_HT_650_Ti_1_titanium%2Bmountain%2Bbike.jpg',
});

productList.push({
    name: 'Skate',
    price: 40,
    image: 'https://th.bing.com/th/id/R.4f90d1101aafc9f83aa5864cf263007c?rik=fwzrPhGpiw2cMQ&pid=ImgRaw&r=0',
});

productList.push({
    name:'Scooter',
    price:800,
    image:'https://th.bing.com/th/id/OIP.sEM589Oz6EPbn_9g5KuM4QHaFj?pid=ImgDet&rs=1',
});

productList.push({
    name: 'Patines',
    price: 60,
    image: 'https://th.bing.com/th/id/R.d05502909e7a2ac5c58d1bd165608609?rik=NPyU9lqPAGu0iA&riu=http%3a%2f%2ffunicycle.com%2fmagasin%2fimages%2fe%2froller%2fPatinARoulettesRollerSkateAgressifStreetFreestyleAdoM12UFSRocesVertGreenVerde.jpg&ehk=56u1ZIAFPqhIRdcTalfMM9BMj26fVuxpJXjXpsK5Ljc%3d&risl=&pid=ImgRaw&r=0',
});

productList.push({
    name: 'Motocycle',
    price: 2500,
    image: 'https://photos.classiccars.com/cc-temp/listing/44/4355/14770738-2004-triumph-motorcycle-std.jpg',
});

productList.push({
    name:'Bike Mountain',
    price:500,
    image:'https://th.bing.com/th/id/OIP.j88d6SvVtoAuZbFDXLQlOgHaE8?pid=ImgDet&rs=1',
});

    /*
    <div class="product-card">
        <img src="https://www.for-sale.co.uk/sh-img/Ribble_HT_650_Ti_1_titanium%2Bmountain%2Bbike.jpg" alt="" class="product">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>           
    */

function renderProducts(array){
    for (product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
        ProductImg.addEventListener('click',openProductDetailAside);

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText= product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCar = document.createElement('img');
        productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCar);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

