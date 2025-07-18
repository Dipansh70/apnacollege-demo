let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    previousInput = currentInput;
    currentInput = '';
    operator = op;
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error';
            } else {
                result = num1 / num2;
            }
            break;
    }

    document.getElementById('display').value = result;
    currentInput = result;
    operator = '';
    previousInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}