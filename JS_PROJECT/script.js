// slider 

let slider = {
    slides: document.querySelectorAll('.slide'),
    currentslide: 0,

    init: function () {
        if (!this.slides.length) {
            console.log("No slides found");
            return;
        }
        this.showslide(this.currentslide);
    },
    showslide: function (index) {
        this.slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        this.slides[index].style.display = 'block';
    },
    prev: function () {
        this.currentslide = (this.currentslide - 1 + this.slides.length) % this.slides.length;
        this.showslide(this.currentslide);
    },
    next: function () {
        this.currentslide = (this.currentslide + 1) % this.slides.length;
        this.showslide(this.currentslide);
    },
};

document.addEventListener('DOMContentLoaded', () => {
    slider.init();
    displayProducts(products);
    updateCartCount();
});

// product

const products = [
    {
        id: 1,
        name: "MEN'S SHIRT",
        price: "3000.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5q0CAlfOOCGDFr1pWjdyFdjsoZVoFh_tPh57QsHV7VlcibAH_2GiT7ppRRGV0D-9yYJcXIJbvwBqOeVW9010fgtj68CuY3AQTtOdXRJDsaliYn8_a3u7jmWF4Sw0LIhOymL_b9P8&usqp=CAc",
        category: "Male"
    },
    {
        id: 2,
        name: "MEN'S SHIRT",
        price: "4050.00",
        Image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQqXMvRnbmtRYRbryEBuQfmPrSggdhjNdSWp6SFXXTR_x4i1ZeBDWoB4N2QNt7jhJfwlavcLOWFbhsmIcESWtEU6jCEPg0tHpNmOGLqLIoeY0il8yBcKd8g4OtVHPCOSz3MS1QnSOwRjM&usqp=CAc",
        category: "Male"
    },
    {
        id: 3,
        name: "MEN'S SHIRT",
        price: "5550.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0o4-ju8z1Jkghw9kPqDGiDB6ZcRWYV2dDaEbGxiYEFNKquBzUflWSrTZPWYVbwboesIrRwEMQF2-DVUi5P73FzJ6H7LfppqcLOz3Awlb4EyBh200I2G1Y0C3mRJzaYbyvpUctcvc&usqp=CAc",
        category: "Male"
    },
    {
        id: 4,
        name: "MEN'S SHIRT",
        price: "2990.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0o4-ju8z1Jkghw9kPqDGiDB6ZcRWYV2dDaEbGxiYEFNKquBzUflWSrTZPWYVbwboesIrRwEMQF2-DVUi5P73FzJ6H7LfppqcLOz3Awlb4EyBh200I2G1Y0C3mRJzaYbyvpUctcvc&usqp=CAc",
        category: "Male"
    },
    {

        id: 5,
        name: "MEN'S SHIRT",
        price: "2050.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0o4-ju8z1Jkghw9kPqDGiDB6ZcRWYV2dDaEbGxiYEFNKquBzUflWSrTZPWYVbwboesIrRwEMQF2-DVUi5P73FzJ6H7LfppqcLOz3Awlb4EyBh200I2G1Y0C3mRJzaYbyvpUctcvc&usqp=CAc",
        category: "Male"
    },
    {
        id: 6,
        name: "KID'S SHIRT",
        price: "2690.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0o4-ju8z1Jkghw9kPqDGiDB6ZcRWYV2dDaEbGxiYEFNKquBzUflWSrTZPWYVbwboesIrRwEMQF2-DVUi5P73FzJ6H7LfppqcLOz3Awlb4EyBh200I2G1Y0C3mRJzaYbyvpUctcvc&usqp=CAc",
        category: "Kids"
    },
    {

        id: 7,
        name: "KID'S SHIRT",
        price: "3390.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5q0CAlfOOCGDFr1pWjdyFdjsoZVoFh_tPh57QsHV7VlcibAH_2GiT7ppRRGV0D-9yYJcXIJbvwBqOeVW9010fgtj68CuY3AQTtOdXRJDsaliYn8_a3u7jmWF4Sw0LIhOymL_b9P8&usqp=CAc",
        category: "kids"
    },
    {
        id: 8,
        name: "KID'S SHIRT",
        price: "5790.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0o4-ju8z1Jkghw9kPqDGiDB6ZcRWYV2dDaEbGxiYEFNKquBzUflWSrTZPWYVbwboesIrRwEMQF2-DVUi5P73FzJ6H7LfppqcLOz3Awlb4EyBh200I2G1Y0C3mRJzaYbyvpUctcvc&usqp=CAc",
        category: "kids"
    },
    {
        id: 9,
        name: "KID'S SHIRT",
        price: "4450.00",
        Image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQqXMvRnbmtRYRbryEBuQfmPrSggdhjNdSWp6SFXXTR_x4i1ZeBDWoB4N2QNt7jhJfwlavcLOWFbhsmIcESWtEU6jCEPg0tHpNmOGLqLIoeY0il8yBcKd8g4OtVHPCOSz3MS1QnSOwRjM&usqp=CAc",
        category: "kids"
    },
    {
        id: 10,
        name: "KID'S SHIRT",
        price: "2250.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5q0CAlfOOCGDFr1pWjdyFdjsoZVoFh_tPh57QsHV7VlcibAH_2GiT7ppRRGV0D-9yYJcXIJbvwBqOeVW9010fgtj68CuY3AQTtOdXRJDsaliYn8_a3u7jmWF4Sw0LIhOymL_b9P8&usqp=CAc",
        category: "Kids"
    },
    {
        id: 11,
        name: "KID'S SHIRT",
        price: "5000.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0o4-ju8z1Jkghw9kPqDGiDB6ZcRWYV2dDaEbGxiYEFNKquBzUflWSrTZPWYVbwboesIrRwEMQF2-DVUi5P73FzJ6H7LfppqcLOz3Awlb4EyBh200I2G1Y0C3mRJzaYbyvpUctcvc&usqp=CAc",
        category: "kids"
    },
    {
        id: 12,
        name: "KID'S SHIRT",
        price: "3660.00",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0o4-ju8z1Jkghw9kPqDGiDB6ZcRWYV2dDaEbGxiYEFNKquBzUflWSrTZPWYVbwboesIrRwEMQF2-DVUi5P73FzJ6H7LfppqcLOz3Awlb4EyBh200I2G1Y0C3mRJzaYbyvpUctcvc&usqp=CAc",
        category: "kids"
    }
];


// display products


function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productItem = `
            <li>
                <img src="${product.Image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <a href="product-details.html?id=${product.id}" class="btn">View Details</a>
                <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
            </li>
        `;
        productList.innerHTML += productItem;
    });

    setupAddToCartButtons();
}

// add to cart button


function setupAddToCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

// Add to Cart function


function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProductIndex = cart.findIndex(item => item.id === parseInt(productId));

    if (existingProductIndex !== -1) {
        alert('Product already added');
        return;
    }

    const product = products.find(p => p.id === parseInt(productId));

    if (product) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.Image,
            quantity: 1
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    } else {
        console.error('Product not found');
    }
}

// Update cart counting


function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.length;
    document.querySelector('.countItem').innerText = count;
}

// Filtering products 


function filterProducts(category) {
    let filteredProducts;
    if (category === 'All') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    updateProductList(filteredProducts);
}


// Sorting product by price


function sortProducts(criteria) {
    let sortedProducts = [...products];
    if (criteria === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'price') {
        sortedProducts.sort((a, b) => parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, '')));
    }
    updateProductList(sortedProducts);
}

// Updating product list based on search and sort 


function updateProductList(productsToDisplay) {
    const searchValue = document.getElementById('search-name') ? document.getElementById('search-name').value.toLowerCase() : '';
    productsToDisplay = productsToDisplay.filter(p => p.name.toLowerCase().includes(searchValue));

    displayProducts(productsToDisplay);
}

// Event listeners for search and sort


if (document.getElementById('search-name')) {
    document.getElementById('search-name').addEventListener('input', function () {
        updateProductList(products);
    });
}

if (document.getElementById('sort-price')) {
    document.getElementById('sort-price').addEventListener('change', function (e) {
        sortProducts(e.target.value);
    });
}



updateProductList(products);
updateCartCount();
