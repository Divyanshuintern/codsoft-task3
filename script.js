// JavaScript for Calculator

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
    isParenthesesOpen = false;
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    isParenthesesOpen = false;
}

// Initialize a variable to keep track of the toggle state
let isParenthesesOpen = false;

// Function to toggle parentheses
function toggleParentheses() {
    let display = document.getElementById('display');
    if (isParenthesesOpen) {
        display.value += ')';
    } 
    else if (display.value === '' || /[+\-*/]$/.test(display.value)) {
        display.value += '(';
    } 
    else {
        display.value += '*(';
    }
    
    // Toggle the state for the next click
    isParenthesesOpen = !isParenthesesOpen;
}

// Function to append text to the display
function appendToDisplay(text) {
    document.getElementById('display').value += text;
}

// Function to calculate and display the result
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
