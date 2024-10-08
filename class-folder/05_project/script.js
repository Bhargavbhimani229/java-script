// Array to store tasks as objects with completed status
let tasks = [];

// Predefined function to add a task to the DOM
function addTaskToDOM(task, index) {
  let divElement = document.createElement('div');
  divElement.setAttribute('class', 'task-container');

  // Add the task text to the div, with strikethrough if completed
  divElement.innerHTML = task.completed ? `<s>${task.text}</s>` : task.text;

  // Create "Complete Task" button
  let completeButton = document.createElement('button');
  completeButton.innerHTML = "Complete Task";

  // Create "Delete Task" button
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete Task";

  // Append the buttons to the task div
  divElement.appendChild(completeButton);
  divElement.appendChild(deleteButton);

  // Append the task div to the main container
  document.getElementById("main-container").appendChild(divElement);

  // Add event listener to mark task as complete
  completeButton.addEventListener('click', function () {
    completeTask(index);
  });

  // Add event listener to delete task when the button is clicked
  deleteButton.addEventListener('click', function () {
    removeTask(index);  // Removes the task from array
  });
}

// Main function to add a new task
function mainFunction() {
  let inputValue = document.getElementById("box").value;

  if (inputValue === "") {
    alert("Please enter a task...");
  } else {
    // Add task to array as an object with text and completed status
    tasks.push({ text: inputValue, completed: false });
    updateTaskList();  // Update the DOM with new task list
    document.getElementById("box").value = "";  // Clear input box
  }
}

// Function to update the task list in the DOM
function updateTaskList() {
  // Clear the existing tasks in the DOM
  document.getElementById("main-container").innerHTML = "";

  // Loop through the tasks array and add each task to the DOM
  tasks.forEach((task, index) => {
    addTaskToDOM(task, index);
  });

  // Dynamically show or hide the "Remove All Tasks" button
  if (tasks.length > 0) {
    showRemoveAllButton();
  } else {
    hideRemoveAllButton();
  }
}

// Function to remove a task from the array
function removeTask(index) {
  tasks.splice(index, 1);  // Remove the task at the given index
  updateTaskList();        // Re-render the task list
}

// Function to mark a task as completed
function completeTask(index) {
  tasks[index].completed = true;  // Mark the task as completed
  updateTaskList();               // Re-render the task list
}

// Function to remove all tasks
function removeAllTasks() {
  tasks = [];               // Empty the tasks array
  updateTaskList();         // Re-render the task list
}

// Function to show the "Remove All Tasks" button
function showRemoveAllButton() {
  let removeAllBtn = document.getElementById("remove-all-btn");
  if (!removeAllBtn) {
    // Create "Remove All Tasks" button
    removeAllBtn = document.createElement('button');
    removeAllBtn.setAttribute('id', 'remove-all-btn');
    removeAllBtn.innerHTML = "Remove All Tasks";

    // Append the button to the main container or any suitable location
    document.body.appendChild(removeAllBtn);

    // Add event listener to clear all tasks when the button is clicked
    removeAllBtn.addEventListener('click', removeAllTasks);
  }
}

// Function to hide the "Remove All Tasks" button
function hideRemoveAllButton() {
  let removeAllBtn = document.getElementById("remove-all-btn");
  if (removeAllBtn) {
    removeAllBtn.remove();  // Remove the button from the DOM
  }
}
