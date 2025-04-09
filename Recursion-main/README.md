# Recursion


This repository contains implementations of fundamental algorithms in JavaScript. Each script solves a specific problem using recursion.

## Files Overview

### 1. Fibonacci Sequence (`fibonnaci.js`)
Computes the Fibonacci sequence up to a given number using recursion. It calls itself with decremented values until reaching the base case (0 or 1).

### 2. Reverse String (`reversestring.js`)
Uses recursion to reverse a string. The function extracts the first character, calls itself with the rest of the string, and appends the character at the end.

### 3. Sum of Numbers (`sumofnum.js`)
Recursively calculates the sum of numbers up to a given input number by adding the current number to the sum of the previous numbers until reaching zero.

### 4. Tower of Hanoi (`towerofhanoi.js`)
Solves the Tower of Hanoi problem recursively. It moves `n-1` disks to an auxiliary peg, moves the nth disk to the target peg, and then moves `n-1` disks from the auxiliary peg to the target peg.

## Usage

Ensure you have [Node.js](https://nodejs.org/) installed to run the scripts.

Run any script using the following command:

```sh
node filename.js
```

Replace `filename.js` with the script you want to execute.

## Contributions
Feel free to contribute by improving existing implementations or adding new algorithms!

## License
This project is licensed under the MIT License.