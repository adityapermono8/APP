// JavaScript for displaying/hiding products based on the selected category
document.querySelectorAll('.categories a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default link behavior
        const category = event.target.getAttribute('data-category');
        if (category === 'all') {
            document.querySelectorAll('.product-card').forEach(card => {
                card.classList.remove('hidden');
            });
        } else {
            document.querySelectorAll('.product-card').forEach(card => {
                if (card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }
    });
});

// JavaScript for updating the price range filter
const priceRange = document.getElementById('priceRange');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');

priceRange.addEventListener('input', () => {
    const value = priceRange.value;
    maxPriceInput.value = value;
});

minPriceInput.addEventListener('input', () => {
    const minValue = minPriceInput.value;
    priceRange.min = minValue;
    applyPriceFilter();
});

maxPriceInput.addEventListener('input', () => {
    const maxValue = maxPriceInput.value;
    priceRange.max = maxValue;
    applyPriceFilter();
});

document.querySelector('.price-filter button').addEventListener('click', applyPriceFilter);

function applyPriceFilter() {
    const minPrice = parseFloat(minPriceInput.value);
    const maxPrice = parseFloat(maxPriceInput.value);
    
    document.querySelectorAll('.product-card').forEach(card => {
        const priceText = card.querySelector('.price').textContent.replace('Rp ', '').replace(',', '');
        const price = parseFloat(priceText);
        
        if (price >= minPrice && price <= maxPrice) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// JavaScript for sorting the products
const sortSelect = document.getElementById('sort');

sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;
    const products = document.querySelectorAll('.product-card');
    const productsArray = Array.from(products);

    let sortedProducts;
    if (sortBy === 'price-low-high') {
        sortedProducts = productsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').textContent.replace('Rp ', '').replace(',', ''));
            const priceB = parseFloat(b.querySelector('.price').textContent.replace('Rp ', '').replace(',', ''));
            return priceA - priceB;
        });
    } else if (sortBy === 'price-high-low') {
        sortedProducts = productsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').textContent.replace('Rp ', '').replace(',', ''));
            const priceB = parseFloat(b.querySelector('.price').textContent.replace('Rp ', '').replace(',', ''));
            return priceB - priceA;
        });
    } else {
        sortedProducts = productsArray; // Default: featured (no sorting)
    }

    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';
    sortedProducts.forEach(product => {
        productsContainer.appendChild(product);
    });
});

// JavaScript for the search functionality
const searchInput = document.querySelector('.search-box input');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
        const productName = card.querySelector('.name').textContent.toLowerCase();
        if (productName.includes(query)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});
