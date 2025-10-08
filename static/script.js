let display = document.getElementById('display');
let currentValue = '0';

function updateDisplay() {
    display.textContent = currentValue;
}

function appendToDisplay(value) {
    if (currentValue === '0' || currentValue === 'Error') {
        currentValue = value;
    } else {
        currentValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentValue = '0';
    updateDisplay();
}

function deleteLast() {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        // Replace × with * for evaluation
        let expression = currentValue.replace(/×/g, '*');
        // Evaluate the expression safely
        currentValue = String(eval(expression));
        updateDisplay();
    } catch (error) {
        currentValue = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentValue = '0';
            updateDisplay();
        }, 1500);
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '/' || key === '*') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    }
});
