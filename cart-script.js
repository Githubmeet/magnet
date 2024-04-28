// Retrieve the cart data from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to update the cart items display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = ''; // Clear the existing cart items

    let subtotal = 0;
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        // Create and append the image element
        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.alt = item.name;
        imageElement.classList.add('cart-item-image');
        cartItemElement.appendChild(imageElement);

        // Create and append the name element
        const nameElement = document.createElement('div');
        nameElement.classList.add('cart-item-name');
        nameElement.textContent = item.name;
        cartItemElement.appendChild(nameElement);

        // Create and append the price element
        const priceElement = document.createElement('div');
        priceElement.classList.add('cart-item-price');
        priceElement.textContent = `₹${item.price.toFixed(2)}`;
        cartItemElement.appendChild(priceElement);

        // Create and append the quantity input element
        const quantityContainer = document.createElement('div');
        quantityContainer.classList.add('cart-item-quantity');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.classList.add('quantity-input');
        quantityInput.addEventListener('change', () => updateCartItem(item, quantityInput.value));
        quantityContainer.appendChild(quantityInput);

        // Create and append the remove button element
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', () => removeFromCart(item));
        quantityContainer.appendChild(removeButton);

        cartItemElement.appendChild(quantityContainer);
        cartItemsElement.appendChild(cartItemElement);

        const total = item.price * item.quantity;
        subtotal += total;
    });

    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `₹${subtotal.toFixed(2)}`;
}

// Function to update a cart item
function updateCartItem(item, newQuantity) {
    item.quantity = parseInt(newQuantity);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(item) {
    const index = cartItems.indexOf(item);
    if (index !== -1) {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDisplay();
        updateShippingDisplay();
    }
}

// Initialize the cart display
updateCartDisplay();
updateShippingDisplay();