// storage.js

// Function to save tasks to localStorage
export function saveTasksToStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to get tasks from localStorage
export function getTasksFromStorage() {
    const tasksData = localStorage.getItem('tasks');
    return tasksData ? JSON.parse(tasksData) : [];
}
