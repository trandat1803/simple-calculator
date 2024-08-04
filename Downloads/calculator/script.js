let display = document.getElementById('display');

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    if (!endsWithOperator()) {
        display.innerText += operator;
    }
}

function appendDecimal() {
    if (!display.innerText.includes('.')) {
        display.innerText += '.';
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteDigit() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculate() {
    if (!endsWithOperator()) {
        display.innerText = eval(display.innerText);
    }
}

function endsWithOperator() {
    return /[+\-*/%]$/.test(display.innerText);
}