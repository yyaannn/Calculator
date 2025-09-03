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
    return a / b;
}

function operate(num1, num2, op) {
    switch (op) {
        case "＋":
            add(num1, num2);
            break;
        case "－":
            subtract(num1, num2);
            break;
        case "×":
            multiply(num1, num2);
            break;
        case "÷":
            divide(num1, num2);
            break;
    }
}

const display = document.querySelector(".display")
function handleInput(text) {
    switch (text) {
        case "AC":
            display.textContent = "";
            break;
        case "DEL":
            display.textContent = display.textContent.slice(0, -1);
            break;
        default:
            display.textContent += text;
            break;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        handleInput(button.textContent);
    });
});
