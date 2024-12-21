const display = document.getElementById('display');
const prevDisplay = document.getElementById('prev-display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    prevDisplay.innerHTML = '&nbsp;';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(display.value);
        prevDisplay.textContent = display.value;
        display.value = result;
    } catch (e) {
        alert('Invalid expression');
    }
}