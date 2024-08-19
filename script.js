// Query for the submit button and input task field once in the beginning
const submit = document.querySelector('#submit');
const newTask = document.querySelector('#newTask');
const taskList = document.querySelector('#taskList');

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener('input', () => {
  // Enable/disable the submit button based on the input field value
  submit.disabled = newTask.value.trim() === '';
});

// Listen for submission of form
document.querySelector('form').addEventListener('submit', (e) => {
  // Find the task the user just submitted
  const task = newTask.value.trim();

  // Create a list item for the new task and add the task to it
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const taskText = document.createElement('span');
  taskText.textContent = task;

  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);

  // Add new element to our unordered list
  taskList.appendChild(listItem);

  // Clear the input field
  newTask.value = '';

  // Prevent the default submission of the form
  e.preventDefault();
  return false;
});