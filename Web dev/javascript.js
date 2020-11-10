var firstNumber = null;
var secondNumber = null;
var operation = null;
var result = null;

function number(value) {
    document.getElementById("textBox").value = document.getElementById("textBox").value + value;
}

function operand(operationToBeDone) {
    firstNumber = document.getElementById("textBox").value;
    document.getElementById("textBox").value = document.getElementById("textBox").value + " " + operationToBeDone + " ";
    operation = operationToBeDone;
}

function resettingEverything() {
    document.getElementById("textBox").value = "";
    firstNumber = 0;
    secondNumber = 0;
    operation = 0;
    result = 0;
}

function solve() {
    startIndex = document.getElementById("textBox").value.indexOf(" ") + 3;
    secondNumber = document.getElementById("textBox").value.substring(startIndex);
    switch(operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "X":
            result = firstNumber*secondNumber;
            break;
        case "/":
            result = firstNumber/secondNumber;
            break;
        default:
            window.alert("Something went wrong!");
    }
    document.getElementById("textBox").value = result;
}