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
    if (!endsWithOperator() && !display.innerText.includes('.')) {
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
        const result = evaluateExpression(display.innerText);
        display.innerText = result;
    }
}

function endsWithOperator() {
    return /[+\-*/%]$/.test(display.innerText);
}

function evaluateExpression(expression) {
    try {
        const tokens = expression.split(/([+\-*/%])/);
        let currentValue = parseFloat(tokens[0]);
        
        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];
            const nextValue = parseFloat(tokens[i + 1]);
            
            switch (operator) {
                case '+':
                    currentValue += nextValue;
                    break;
                case '-':
                    currentValue -= nextValue;
                    break;
                case '*':
                    currentValue *= nextValue;
                    break;
                case '/':
                    currentValue /= nextValue;
                    break;
                case '%':
                    currentValue %= nextValue;
                    break;
            }
        }
        
        return currentValue;
    } catch (error) {
        return 'Error';
    }
}
