// Clears the calculator screen
function clearScreen() {
    document.getElementById("result").value = "";
}


// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
    var output = document.getElementById("result").value;
    var result = eval(output);
    document.getElementById("result").value = result;
}

// Will execute current code and then negate the value after clearing
function plusMinus() {
    calculate();
    var x = document.getElementById("result").value;
    clearScreen();
    document.getElementById("result").value += "-" + x;
}

// Will execute current code and then multiply by 0.01 or divide by 100
function percent() {
    calculate();
    var x = document.getElementById("result").value;
    document.getElementById("result").value = x * 0.01 ;
}

