const main = document.querySelector('main');

async function fetchDesserts() {
    const response = await fetch('data.json');
    const data = await response.json();

    data.forEach((item) => {
        const imageSRC = getImageSource(item.image);
        const category = item.category;
        const name = item.name;
        const price = item.price.toFixed(2);
        
        populateDOM(imageSRC, category, name, price);
    });
}

function getImageSource(imageObj) {
    const width = window.innerWidth;

    if (width < 768) {
        return imageObj.mobile;
    } else if (width < 1024) {
        return imageObj.tablet;
    } else {
        return imageObj.desktop;
    }
}

function populateDOM(imageSRC, category, name, price) {
    const container = document.createElement('div')
    container.classList = 'container'
    main.append(container)

    const imgContainer = document.createElement('div')
    imgContainer.classList = 'imgContainer'
    

    const productImage = document.createElement('img')
    productImage.classList = 'productImage'
    productImage.setAttribute('src', imageSRC)
    imgContainer.append(productImage)

    // Add to Cart
    const addToCart = document.createElement('div')
    addToCart.classList = 'addToCart'
    imgContainer.append(addToCart)

    const addToCartIcon = document.createElement('img')
    addToCartIcon.classList = 'addToCartIcon'
    addToCartIcon.setAttribute('src', 'assets/images/icon-add-to-cart.svg')
    addToCart.append(addToCartIcon)

    const addToCartText = document.createElement('p')
    addToCartText.classList = 'addToCartText'
    addToCartText.innerText = 'Add to Cart'
    addToCart.append(addToCartText)

    // Counter
    const counter = document.createElement('div')
    counter.classList = 'counter'
    imgContainer.append(counter)

    const decrementIcon = document.createElement('img')
    decrementIcon.classList = 'decrementIcon'
    decrementIcon.setAttribute('src', 'assets/images/icon-decrement-quantity.svg')
    counter.append(decrementIcon)

    const quantity = document.createElement('p')
    quantity.classList = 'quantity'
    quantity.innerText = '1'
    counter.append(quantity)

    
    const incrementIcon = document.createElement('img')
    incrementIcon.classList = 'incrementIcon'
    incrementIcon.setAttribute('src', 'assets/images/icon-increment-quantity.svg')
    counter.append(incrementIcon)

    // Product Info
    const productCategory = document.createElement('p')
    productCategory.classList = 'productCategory'
    productCategory.innerText = category

    const productName = document.createElement('p')
    productName.classList = 'productName'
    productName.innerText = name

    const productPrice = document.createElement('p')
    productPrice.classList = 'productPrice'
    productPrice.innerText = `$${price}`

    const productInfo = document.createElement('div')
    productInfo.classList = 'productInfo'
    productInfo.append(productCategory)
    productInfo.append(productName)
    productInfo.append(productPrice)

    container.append(imgContainer)
    container.append(productInfo)
}

fetchDesserts();

