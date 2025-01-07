const container = document.querySelector('.container');
const sortDropdown = document.getElementById('sort');
let allProducts = [];

const url = 'https://pizzaallapala.p.rapidapi.com/productos';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '32c36dbbc9msh735445118e5be60p1caf4ejsn41bf792d3a4d',
    'x-rapidapi-host': 'pizzaallapala.p.rapidapi.com'
  }
};
const fetchPizzaData = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    allProducts = data.productos;
    displayProducts(allProducts);
  } catch (error) {
    console.error('Error fetching data:', error);
    container.innerHTML = '<p>Failed to load products. Please try again later.</p>';
  }
};

const displayProducts = (products) => {
  container.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    const name = product.nombre;
    const description = product.descripcion;
    const imageUrl = product.linkImagen || 'https://via.placeholder.com/300';
    const price = product.precio || 'Not Available';
    const rating = product.rating || 'No Rating';
    const availability = product.disponible ? 'In Stock' : 'Out of Stock';
    card.innerHTML = `
      <img src="${imageUrl}" alt="Pizza Image">
      <h3>${name}</h3>
      <p>${description}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Rating:</strong> ${rating}</p>
      <p><strong>Status:</strong> ${availability}</p>
    `;
    container.appendChild(card);
  });
};

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value.toLowerCase();

  const filteredProducts = allProducts.filter(product =>
    (product.nombre || '').toLowerCase().includes(searchText));
  displayProducts(filteredProducts);
});

fetchPizzaData();

