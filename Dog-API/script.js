// const navLinks = document.getElementById('nav-links');

// fetch('https://dog.ceo/api/breeds/list/all')
//   .then(res => res.json())
//   .then(data => {
//     let dogRec = data.message;
//     let dogDiv;
//     let dogUl;

//     for (const breed in dogRec) {
//       dogDiv += `<div>${breed}`;
//       if (dogRec[breed].length > 0) {
//         dogUl = `<ul>`;
//         dogRec[breed].forEach(subBreed => {
//           dogUl += `<li>${subBreed}</li>`;
//           console.log(subBreed);

//         });
//         dogUl +=`</ul>`;
//         dogDiv += dogUl + `</div>`;
//       }
//       else
//       {
//         dogDiv += `</div>`;
//       }
//     }

//     navLinks.innerHTML += dogDiv;


//   })
//   .catch(err => console.log(err))

const navLinks = document.getElementById('nav-links');
const content = document.querySelector('.content');

fetch('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.json())
  .then((data) => {
    const breedData = data.message;
    console.log(breedData);

    let sidebarContent = '';
    for (const breed in breedData) {
      sidebarContent += `
        <li>
          <button class="dropdown-toggle" onclick="imgReturn('${breed}')">${breed}</button>
          <ul class="dropdown-menu">
            ${breedData[breed].map(subBreed => `<li><a href="#">${subBreed}</a></li>`).join('')}
          </ul>
        </li>
      `;
    }
    navLinks.innerHTML = sidebarContent;
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// Function to display images based on selected breed
const imgReturn = (breed) => {
  content.innerHTML = `<div class="loader">Loading images...</div>`;

  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res.json())
    .then((data) => {
      let imgData = data.message;
      content.innerHTML = ''; 

      imgData.forEach((url) => {
        content.innerHTML += `
          <div>
            <img src='${url}' alt='${breed}'/>
            <span>${breed}</span>
          </div>`;
      });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
      content.innerHTML = `<p>Error fetching images. Please try again later.</p>`;
    });
};

  






