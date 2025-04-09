// task.js

// Array to hold tasks
let tasks = [];

// Function to add a new task to the array
export function addTask(task) {
    tasks.push(task);
    console.log(`Task added: ${task}`);
}

// Function to remove a task from the array
export function removeTask(task) {
    tasks = tasks.filter(t => t !== task);
    console.log(`Task removed: ${task}`);
}

// Function to display all tasks
export function displayTasks() {
    console.log("Tasks List:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

// Function to load tasks from storage
export function loadTasks() {
    return tasks;
}

// Function to set tasks (to be called after tasks are retrieved from localStorage)
export function setTasks(newTasks) {
    tasks = newTasks;
}
