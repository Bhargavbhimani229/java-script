function mainFunction() {
  let inputValue = document.getElementById("box").value;

  // Create a new div element for the task
  let divElement = document.createElement('div');
  divElement.setAttribute('class', 'task-container');
  
  // Add the input value to the task div
  divElement.innerHTML = inputValue;

  // Clear the input box after adding the task
  document.getElementById("box").value = "";

  // Create a delete button for the task
  let buttonElement = document.createElement('button');
  buttonElement.setAttribute('class', 'delete-button');
  buttonElement.innerHTML = "Delete Task";

  // Append the button to the task div
  divElement.appendChild(buttonElement);

  // Append the task div to the main container
  document.getElementById("main-container").appendChild(divElement);

  // Add click event listener to delete the task when the button is clicked
  buttonElement.addEventListener('click', function() {
    divElement.remove();  // Removes the task div
  });
}




