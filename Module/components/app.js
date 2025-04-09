// app.js

import { addTask, removeTask, displayTasks, loadTasks, setTasks } from './tasks.js';
import { saveTasksToStorage, getTasksFromStorage } from './storage.js';

// Get DOM elements for user interaction
const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-button");
const removeButton = document.querySelector("#remove-button");
const displayButton = document.querySelector("#display-button");

// Load tasks from localStorage and set them in the app
let tasks = getTasksFromStorage();
setTasks(tasks);

// Display tasks initially
displayTasks();

// Add event listeners to the buttons
addButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        tasks.push(task);
        saveTasksToStorage(tasks);  // Save updated tasks to localStorage
        taskInput.value = '';  // Clear input field
        displayTasks();  // Re-render tasks
    }
});

removeButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
        removeTask(task);
        tasks = tasks.filter(t => t !== task);  // Update tasks array
        saveTasksToStorage(tasks);  // Save updated tasks to localStorage
        taskInput.value = '';  // Clear input field
        displayTasks();  // Re-render tasks
    }
});

displayButton.addEventListener("click", () => {
    displayTasks();
});
