// Plant Data with prices and images
const plants = {
    orchidaceae: [
        { id: 1, name: "Phalaenopsis", description: "Moth Orchid", price: 29.99, image: "https://images.unsplash.com/photo-1583846712268-a77d97b7fd68?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 2, name: "Cattleya", description: "Corsage Orchid", price: 34.99, image: "https://images.unsplash.com/photo-1591919668546-512635aa9030?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, name: "Dendrobium", description: "Singapore Orchid", price: 24.99, image: "https://images.unsplash.com/photo-1707019786672-bd8bfaf15f0d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, name: "Vanda", description: "Blue Orchid", price: 39.99, image: "https://images.unsplash.com/photo-1567748157439-651aca2ff064?auto=format&fit=crop&w=600&q=80" },
        { id: 5, name: "Oncidium", description: "Dancing Lady Orchid", price: 27.99, image: "https://images.unsplash.com/photo-1638047439096-55a186f4c2f7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 6, name: "Paphiopedilum", description: "Slipper Orchid", price: 32.99, image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=600&q=80" },
        { id: 7, name: "Cymbidium", description: "Boat Orchid", price: 29.99, image: "https://images.unsplash.com/photo-1504648492881-a5150829085c?auto=format&fit=crop&w=600&q=80" },
        { id: 8, name: "Miltonia", description: "Pansy Orchid", price: 26.99, image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=600&q=80" }
    ],
    cactaceae: [
        { id: 9, name: "Mammillaria", description: "Pincushion Cactus", price: 19.99, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80" },
        { id: 10, name: "Echinopsis", description: "Hedgehog Cactus", price: 22.99, image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=600&q=80" },
        { id: 11, name: "Ferocactus", description: "Barrel Cactus", price: 24.99, image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=600&q=80" },
        { id: 12, name: "Opuntia", description: "Prickly Pear", price: 18.99, image: "https://images.unsplash.com/photo-1504648492881-a5150829085c?auto=format&fit=crop&w=600&q=80" },
        { id: 13, name: "Cereus", description: "Night-blooming Cereus", price: 29.99, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80" },
        { id: 14, name: "Astrophytum", description: "Star Cactus", price: 21.99, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80" },
        { id: 15, name: "Gymnocalycium", description: "Chin Cactus", price: 17.99, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80" },
        { id: 16, name: "Echinocactus", description: "Golden Barrel Cactus", price: 23.99, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80" }
    ],
    rosaceae: [
        { id: 17, name: "Hybrid Tea Rose", description: "Modern Classic Rose", price: 34.99, image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80" },
        { id: 18, name: "Floribunda", description: "Cluster-flowered Rose", price: 32.99, image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=600&q=80" },
        { id: 19, name: "Climbing Rose", description: "Rambling Rose", price: 39.99, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=600&q=80" },
        { id: 20, name: "Shrub Rose", description: "English Rose", price: 29.99, image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=600&q=80" },
        { id: 21, name: "Miniature Rose", description: "Fairy Rose", price: 24.99, image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80" },
        { id: 22, name: "Grandiflora", description: "Large-flowered Rose", price: 36.99, image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80" },
        { id: 23, name: "Damask Rose", description: "Damascus Rose", price: 34.99, image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80" },
        { id: 24, name: "Alba Rose", description: "White Rose", price: 31.99, image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80" }
    ]
};

// Cart state
let cart = [];
let addedToCart = new Set();

// DOM Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const productsGrid = document.getElementById('products-grid');
const cartBadge = document.getElementById('cart-badge');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Cart Management Functions
function addToCart(productId, category) {
    const product = findProductById(productId);
    if (!product || addedToCart.has(productId)) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1, category });
    }

    addedToCart.add(productId);
    updateCartBadge();
    updateAddToCartButtons();
    saveCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    addedToCart.delete(productId);
    updateCartBadge();
    updateAddToCartButtons();
    renderCart();
    saveCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        renderCart();
        updateCartBadge();
        saveCart();
    }
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
}

function updateAddToCartButtons() {
    addedToCart.forEach(productId => {
        const button = document.getElementById(`btn-${productId}`);
        if (button) {
            button.disabled = true;
            button.textContent = 'Added to Cart';
        }
    });
}

function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some beautiful plants to get started!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="delete-btn" onclick="removeFromCart(${item.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }

    updateCartTotal();
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function saveCart() {
    const cartData = {
        cart: cart,
        addedToCart: Array.from(addedToCart)
    };
    localStorage.setItem('paradiseNurseryCart', JSON.stringify(cartData));
}

function loadCart() {
    const stored = localStorage.getItem('paradiseNurseryCart');
    if (stored) {
        const cartData = JSON.parse(stored);
        cart = cartData.cart || [];
        addedToCart = new Set(cartData.addedToCart || []);
    }
}

// Product Management Functions
function findProductById(id) {
    for (const category in plants) {
        const product = plants[category].find(p => p.id === id);
        if (product) return product;
    }
    return null;
}

function displayPlants(category) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    if (category === 'all') {
        Object.entries(plants).forEach(([category, products]) => {
            products.forEach(product => {
                renderProductCard(product, category, grid);
            });
        });
    } else {
        plants[category].forEach(product => {
            renderProductCard(product, category, grid);
        });
    }
}

function renderProductCard(product, category, container) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button 
                id="btn-${product.id}" 
                class="btn btn-primary btn-sm w-full hover-up"
                onclick="addToCart(${product.id}, '${category}')"
                ${addedToCart.has(product.id) ? 'disabled' : ''}
            >
                <span>${addedToCart.has(product.id) ? '✓ Added to Cart' : '🛒 Add to Cart'}</span>
            </button>
        </div>
    `;
    container.appendChild(card);
}

function setupFilterListeners() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            updateActiveButton(button);
            displayPlants(category);
        });
    });
}

function updateActiveButton(activeButton) {
    filterButtons.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
}

// Navigation Functions
function showLandingPage() {
    document.getElementById('landing').style.display = 'flex';
    document.getElementById('shopping').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
}

function showShoppingPage() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('shopping').style.display = 'block';
    document.getElementById('cart').style.display = 'none';
}

function showCartPage() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('shopping').style.display = 'none';
    document.getElementById('cart').style.display = 'block';
    renderCart();
}

// Modal Functions
function showCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    setupFilterListeners();
    displayPlants('all');
    updateCartBadge();
});

