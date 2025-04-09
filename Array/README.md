#ARRAY
# JavaScript Array Methods Project

## Overview
This project demonstrates various JavaScript array methods and their applications. It consists of JavaScript files implementing fundamental array operations, including iteration, transformation, filtering, and reduction. The project is structured to help understand how array methods work and how they can be used to manipulate data efficiently.

## Files Included

### 1. `array.html`
This is the main HTML file that loads the JavaScript scripts.
- It links to `array.js` and `methods.js`, ensuring the script execution in a browser environment.

### 2. `array.js`
This file focuses on basic array operations, such as:
- **Creating Arrays**: Declares arrays with multiple values.
- **Adding Elements**: Uses `push()` (adds at the end) and `unshift()` (adds at the beginning) to modify an array.
- **Modifying Elements**: Demonstrates changing values at specific indexes and replacing elements using `splice()`.
- **Concatenation**: Uses `concat()` to merge two arrays.

### 3. `methods.js`
This file contains examples of important array methods:

#### **1. `forEach()`**
- Iterates over an array and applies a function to each element.
- Example in `methods.js` demonstrates logging each number in an array.

#### **2. `map()`**
- Creates a new array by applying a transformation function to each element.
- Example converts numbers into their squares.

#### **3. `filter()`**
- Filters elements based on a condition and returns a new array.
- Example selects even numbers from an array.

#### **4. `reduce()`**
- Reduces an array to a single value (e.g., sum, minimum value, etc.).
- Example finds the smallest number in an array.

#### **5. Transactions Example**
- Simulates financial transactions with an array of objects.
- **forEach()**: Logs transaction details.
- **map()**: Converts transaction amounts to USD.
- **filter()**: Extracts transactions above $100.
- **reduce()**: Calculates the total revenue from large transactions.

## How to Run the Project
1. Open `array.html` in a web browser.
2. Open the developer console (`F12` in most browsers) to see the output of JavaScript functions.

## Key Learnings
- Understanding how JavaScript arrays work and their indexing system.
- Using `forEach()`, `map()`, `filter()`, and `reduce()` for different scenarios.
- Handling arrays containing objects and performing data transformations.
- Writing efficient and clean JavaScript code for array manipulation.

