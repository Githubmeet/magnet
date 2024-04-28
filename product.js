let products = [];

function saveProducts() {
  localStorage.setItem('products', JSON.stringify(products));
}

function loadProducts() {
  const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    products = JSON.parse(storedProducts);
    displayProducts();
  }
}

function displayProducts() {
  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = '';

  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;
    productGrid.appendChild(card);
  });
}

function loadProductForm() {
  const nameInput = document.getElementById('name');
  const priceInput = document.getElementById('price');
  const imageInput = document.getElementById('image');

  const addButton = document.querySelector('#product-form button');
  addButton.innerHTML = 'Add Product';

  addButton.onclick = () => {
    const name = nameInput.value;
    const price = priceInput.value;
    const image = imageInput.value;

    if (name && price && image) {
      const product = { name, price, image };
      products.push(product);
      saveProducts();
      displayProducts();
      clearForm();
    } else {
      alert('Please fill in all fields.');
    }
  };
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('image').value = '';
}

loadProducts();


// Existing code remains unchanged

function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
  
    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      productGrid.appendChild(card);
    });
  }
  
  function addToCart(index) {
    const product = products[index];
    // Here you can implement your cart logic, such as adding the product to a cart array or saving it to localStorage.
    // alert(`Added "${product.name}" to cart!`);
  }
  function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
  
    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      productGrid.appendChild(card);
    });
}

function displayProducts() {
  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = '';

  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
}
