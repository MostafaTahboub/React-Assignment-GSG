const products = [
    { name: 'Smartphone', category: 'electronics', price: 699 },
    { name: 'Laptop', category: 'electronics', price: 999 },
    { name: 'T-Shirt', category: 'clothing', price: 25 },
    { name: 'Jeans', category: 'clothing', price: 45 },
    { name: 'Sofa', category: 'furniture', price: 450 },
    { name: 'Dining Table', category: 'furniture', price: 650 }
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <span>$${product.price}</span>
        `;

        productList.appendChild(productItem);
    });
}


function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}


document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProducts(category);
    });
});


window.onload = () => {
    displayProducts(products);
};
