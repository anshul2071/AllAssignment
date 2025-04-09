import { add, sub, mul, div } from "./math.js";

const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const mulBtn = document.querySelector("#mul");
const divBtn = document.querySelector("#div");
const calculateBtn = document.querySelector("#calculate");
const operatorDisplay = document.querySelector("#operatorDisplay");
const resultDisplay = document.querySelector("#resultDisplay"); // Select result display

let selectedOperation = null;

addBtn.addEventListener("click", () => {
    selectedOperation = "add";
    operatorDisplay.textContent = "Selected Operator: +";
});

subBtn.addEventListener("click", () => {
    selectedOperation = "sub";
    operatorDisplay.textContent = "Selected Operator: -";
});

mulBtn.addEventListener("click", () => {
    selectedOperation = "mul";
    operatorDisplay.textContent = "Selected Operator: ×";
});

divBtn.addEventListener("click", () => {
    selectedOperation = "div";
    operatorDisplay.textContent = "Selected Operator: ÷";
});

calculateBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Result: Please enter valid numbers.";
        return;
    }

    try {
        let result;
        switch (selectedOperation) {
            case "add":
                result = add(num1, num2);
                break;
            case "sub":
                result = sub(num1, num2);
                break;
            case "mul":
                result = mul(num1, num2);
                break;
            case "div":
                result = div(num1, num2);
                break;
            default:
                resultDisplay.textContent = "Result: Please select an operation.";
                return;
        }

        resultDisplay.textContent = `Result: ${result}`;
    } catch (error) {
        resultDisplay.textContent = `Error: ${error.message}`;
    }
});
