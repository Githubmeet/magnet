// Get the product ID from the URL or other means
const productId = /* ... */

// Fetch product details from the server
fetch(`/api/products/${productId}`)
  .then(response => response.json())
  .then(product => {
    // Update the HTML elements with the product details
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `₹${product.price}`;
    document.getElementById('product-image').src = product.imageUrl;

    // Add event listener for the "Add to Cart" button
    document.getElementById('add-to-cart').addEventListener('click', () => {
      // Implement your cart logic here
      addToCart(product);
    });
  })
  .catch(error => {
    console.error('Error fetching product details:', error);
  });