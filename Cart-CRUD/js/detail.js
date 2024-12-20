const product = JSON.parse(localStorage.getItem('selectedProduct'));

function viewProduct(productId) {
  const selectedProduct = products.find(product => product.id === productId);
  localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
  console.log(selectedProduct);
}

if (product) {
  document.getElementById('product-title').innerText = product.title;

  const productDetailsContainer = document.getElementById('product-details');

  const imagesHtml = product.images.map(image => `
    <div class="col-md-4">
      <div class="scrollable-image">
        <img src="${image}" class="img-fluid rounded" alt="${product.title}">
      </div>
    </div>
  `).join(''); 

  productDetailsContainer.innerHTML = `
    <div class="row">
      ${imagesHtml}
    </div>
    <div class="col-md-6">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <h3>Price: $<span id="product-price">${product.price.toFixed(2)}</span></h3>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Brand:</strong> ${product.brand}</p>
      <p><strong>Rating:</strong> ${product.rating}/5</p>
    </div>
  `;

} else {
  const productDetailsContainer = document.getElementById('product-details');
  productDetailsContainer.innerHTML = `
    <p class="text-danger">No product selected. Please go back and select a product.</p>
  `;
}
