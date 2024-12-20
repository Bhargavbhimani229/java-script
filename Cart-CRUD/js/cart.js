function renderCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items-container');
  const totalPriceElement = document.getElementById('total-price');

  cartItemsContainer.innerHTML = '';  
  let totalPrice = 0;

  
  cartItems.forEach((item, index) => {
    item.quantity = item.quantity || 1;

    totalPrice += item.price * item.quantity;

    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'col-12 cart-item d-flex justify-content-between align-items-center';

    cartItemElement.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.thumbnail}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: cover;">
        <div class="cart-item-details">
          <h5>${item.title}</h5>
          <p>$${item.price.toFixed(2)} x <span id="quantity-${index}">${item.quantity}</span></p>
        </div>
      </div>
      <div class="cart-item-actions">
        <button class="btn btn-info" onclick="updateQuantity(${index}, 1)">+</button>
        <button class="btn btn-info" onclick="updateQuantity(${index}, -1)">-</button>
        <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    
    cartItemsContainer.appendChild(cartItemElement);
  });

  
  totalPriceElement.textContent = totalPrice.toFixed(2); 
}


function updateQuantity(index, change) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cartItems[index];
  
  
  if (item.quantity + change > 0) {
    item.quantity += change;
  } else {
    item.quantity = 1; 
  }

  
  localStorage.setItem('cart', JSON.stringify(cartItems));
  renderCartItems();
}
function removeFromCart(index) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.splice(index, 1); 
  localStorage.setItem('cart', JSON.stringify(cartItems));
  renderCartItems(); 
}

function clearCart() {
  localStorage.removeItem('cart');
  renderCartItems(); 
}

renderCartItems();
