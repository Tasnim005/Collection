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

    addCartListeners();
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
    const container = document.createElement('div');
    container.classList = 'container';
    main.append(container);

    const imgContainer = document.createElement('div');
    imgContainer.classList = 'imgContainer';

    const productImage = document.createElement('img');
    productImage.classList = 'productImage';
    productImage.setAttribute('src', imageSRC);
    imgContainer.append(productImage);

    // Add to Cart
    const addToCart = document.createElement('div');
    addToCart.classList = 'addToCart';
    imgContainer.append(addToCart);

    const addToCartIcon = document.createElement('img');
    addToCartIcon.classList = 'addToCartIcon';
    addToCartIcon.setAttribute('src', 'assets/images/icon-add-to-cart.svg');
    addToCart.append(addToCartIcon);

    const addToCartText = document.createElement('p');
    addToCartText.classList = 'addToCartText';
    addToCartText.innerText = 'Add to Cart';
    addToCart.append(addToCartText);

    // Counter (initially hidden)
    const counter = document.createElement('div');
    counter.classList = 'counter';
    counter.style.display = 'none'; // Hidden by default
    imgContainer.append(counter);

    const decrementIcon = document.createElement('img');
    decrementIcon.classList = 'decrementIcon';
    decrementIcon.setAttribute('src', 'assets/images/icon-decrement-quantity.svg');
    counter.append(decrementIcon);

    const quantity = document.createElement('p');
    quantity.classList = 'quantity';
    quantity.innerText = '1';
    counter.append(quantity);

    const incrementIcon = document.createElement('img');
    incrementIcon.classList = 'incrementIcon';
    incrementIcon.setAttribute('src', 'assets/images/icon-increment-quantity.svg');
    counter.append(incrementIcon);

    // Product Info
    const productCategory = document.createElement('p');
    productCategory.classList = 'productCategory';
    productCategory.innerText = category;

    const productName = document.createElement('p');
    productName.classList = 'productName';
    productName.innerText = name;

    const productPrice = document.createElement('p');
    productPrice.classList = 'productPrice';
    productPrice.innerText = `$${price}`;

    const productInfo = document.createElement('div');
    productInfo.classList = 'productInfo';
    productInfo.append(productCategory);
    productInfo.append(productName);
    productInfo.append(productPrice);

    container.append(imgContainer);
    container.append(productInfo);
}

function addCartListeners() {
    const addToCartButtons = document.querySelectorAll('.addToCart');

    addToCartButtons.forEach(item => {
        item.addEventListener('click', function () {


            const imgContainer = item.closest('.imgContainer');
            const counter = imgContainer.querySelector('.counter');
            counter.style.display = 'flex'; // Show the counter

            const increment = counter.querySelector('.incrementIcon');
            const decrement = counter.querySelector('.decrementIcon');
            const quantity = counter.querySelector('.quantity');
            let i = Number(quantity.innerText);

            //Cart
            const activeState = document.querySelector('.activeState')
            activeState.style.display = 'block'

            const emptyState = document.querySelector('.emptyState')
            emptyState.style.display = 'none'

            const info = document.querySelector('.info')


            //Populating DOM
            const order = document.createElement('div')
            order.classList = 'order'
            activeState.insertBefore(order, info)

            const orderSummary = document.createElement('div')
            orderSummary.classList = 'orderSummary'
            order.append(orderSummary)

            const orderedProductName = document.createElement('p')
            orderedProductName.classList = 'orderedProductName'
            orderSummary.append(orderedProductName)

            const pricing = document.createElement('div')
            pricing.classList = 'pricing'
            orderSummary.append(pricing)

            const orderedQuantity = document.createElement('p')
            orderedQuantity.classList = 'orderedQuantity'
            pricing.append(orderedQuantity)

            const price = document.createElement('p')
            price.classList = 'price'
            pricing.append(price)

            const totalPrice = document.createElement('p')
            totalPrice.classList = 'totalPrice'
            pricing.append(totalPrice)

            const removeProduct = document.createElement('img')
            removeProduct.setAttribute('src', 'assets/images/icon-remove-item.svg')
            removeProduct.style.width = '10px'
            order.append(removeProduct)

            const hr = document.createElement('hr')
            activeState.insertBefore(hr, info)

            //Retrieving Profuct info
            const productInfo = imgContainer.nextSibling
            const productName = productInfo.querySelector('.productName')
            const productPrice = productInfo.querySelector('.productPrice')
            console.log(productName.innerText)

            //Passing product info to Cart
            orderedProductName.innerText = productName.innerText
            price.innerText = `@ ${productPrice.innerText}`
            orderedQuantity.innerText = `${quantity.innerText}`


            // ****start from here
            //Counter
            increment.addEventListener('click', () => {
                i++;
                quantity.innerText = i;
                orderedQuantity.innerText = `${quantity.innerText}`
            });

            decrement.addEventListener('click', () => {
                if (i <= 0) {
                    order.remove()
                    
                } else {
                    i--;
                    quantity.innerText = i;
                    orderedQuantity.innerText = `${quantity.innerText}`
                }
            });
        });
    });
}

fetchDesserts();
