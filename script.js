let storedValue = null, currentValue = "", operator = null;

function updateDisplay(text) {
    const display = document.querySelector(".display");
    display.textContent = text;
}

function clear() {
    storedValue = null;
    currentValue = "";
    operator = null;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "Error!";
    }
    return a / b;
}

function operate(num1, num2, op) {
    switch (op) {
        case "＋":
            return add(num1, num2);
        case "－":
            return subtract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}


function handleInput(button) {
    switch (button) {
        case "AC":
            clear();
            updateDisplay("");
            break;
        case "DEL":
            currentValue = currentValue.slice(0, -1);
            updateDisplay(currentValue);
            break;
        case "＋":
        case "－":
        case "×":
        case "÷":
            if (currentValue) {
                if (!storedValue) {
                    storedValue = parseFloat(currentValue);
                } else {
                    if (currentValue.startsWith(".")) {
                        currentValue = "0" + currentValue;
                    }
                    storedValue = operate(storedValue, parseFloat(currentValue), operator);
                }

                currentValue = "";
                updateDisplay(storedValue);
                if (storedValue == "Error!") clear();
            }

            operator = button;
            break;
        case "＝":
            if (currentValue) {
                if (currentValue.startsWith(".")) {
                    currentValue = "0" + currentValue;
                }
                storedValue = operate(storedValue, parseFloat(currentValue), operator);
                updateDisplay(storedValue);
                clear();
            }
            break;
        default:
            if (button == "." && currentValue.includes(".")) return;
            currentValue += button;
            updateDisplay(currentValue);
            break;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        handleInput(button.textContent);
    });
});
