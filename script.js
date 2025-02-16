//kalkulator
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("liczba");
    const previousDisplay = document.getElementById("previous");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    function updateDisplay(value) {
        display.value = value;
    }
    
    function updatePreviousDisplay(value) {
        previousDisplay.value = value;
    }

    function handleInput(value) {
        if (!isNaN(value) || value === ",") {
            if (value === ",") {
                value = ".";
            }
            if (value === "." && !currentInput.includes(".")) {
                currentInput += ".";
            } else if (!isNaN(value)) {
                currentInput += value;
            }
            updateDisplay(currentInput);
        } else if (["+", "-", "×", "÷"].includes(value)) {
            if (currentInput !== "") {
                previousInput = currentInput;
                updatePreviousDisplay(previousInput + " " + value);
                currentInput = "";
                operator = value;
                updateDisplay("");
            }
        } else if (value === "Enter" || value === "=") {
            if (previousInput !== "" && currentInput !== "") {
                let num1 = parseFloat(previousInput);
                let num2 = parseFloat(currentInput);
                let result;

                switch (operator) {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "×":
                        result = num1 * num2;
                        break;
                    case "÷":
                        result = num2 !== 0 ? num1 / num2 : "Błąd";
                        break;
                }
                updateDisplay(result);
                updatePreviousDisplay("");
                currentInput = result.toString();
                previousInput = "";
                operator = "";
            }
        } else if (value === "Backspace" || value === "⌫") {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
        } else if (value === "%") {
            if (currentInput !== "") {
                currentInput = (parseFloat(currentInput) / 100).toString();
                updateDisplay(currentInput);
            }
        } else if (value === "1/x") {
            if (currentInput !== "" && parseFloat(currentInput) !== 0) {
                currentInput = (1 / parseFloat(currentInput)).toString();
                updateDisplay(currentInput);
            }
        } else if (value === "√") {
            if (currentInput !== "" && parseFloat(currentInput) >= 0) {
                currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                updateDisplay(currentInput);
            }
        } else if (value === "x²") {
            if (currentInput !== "") {
                currentInput = Math.pow(parseFloat(currentInput), 2).toString();
                updateDisplay(currentInput);
            }
        } else if (value === "±") {
            if (currentInput !== "") {
                currentInput = (-parseFloat(currentInput)).toString();
                updateDisplay(currentInput);
            }
        } else if (value === "Escape" || value === "C" || value === "CE") {
            currentInput = "";
            if (value === "C") {
                previousInput = "";
                operator = "";
                updatePreviousDisplay("");
            }
            updateDisplay("");
        }
    }

    document.querySelectorAll(".cyfry, td button").forEach(button => {
        button.addEventListener("click", function () {
            handleInput(this.textContent);
        });
    });

    document.addEventListener("keydown", function (event) {
        let keyMap = {
            "*": "×",
            "/": "÷",
            "Backspace": "⌫",
            "Enter": "="
        };
        let key = keyMap[event.key] || event.key;
        handleInput(key);
    });
});