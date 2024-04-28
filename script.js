// Retrieve the cart data from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Add event listeners for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to add an item to the cart
function addToCart(event) {
    const button = event.target;
    const productName = button.dataset.productName;
    const productPrice = parseFloat(button.dataset.productPrice);
    const productImage = button.dataset.productImage;

    const cartItem = {
        name: productName,
        price: productPrice,
        quantity: 1,
        image: productImage
    };

    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.name === cartItem.name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push(cartItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = 'cart.html';
}