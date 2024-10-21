function myRight() {
  let right = document.getElementById('right');
  let animalImg = document.querySelectorAll('.animal-img');
  
  // right.disabled = true; // Disable the button during the transition
  document.querySelector("#main-container").appendChild(animalImg[0]);

  setTimeout(() => {
    right.disabled = false; // Re-enable the button after 0.5s (matching CSS transition)
  }, 500); // Adjust to the transition timing
}

function myLeft() {
  let left = document.getElementById('left');
  let animalImg = document.querySelectorAll('.animal-img');
  
  left.disabled = true; // Disable the button during the transition
  document.querySelector("#main-container").prepend(animalImg[animalImg.length - 1]);

  setTimeout(() => {
    left.disabled = false; // Re-enable the button after 0.5s
  }, 500); // Adjust to the transition timing
}

