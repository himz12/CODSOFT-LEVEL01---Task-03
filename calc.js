let display = document.getElementById("display");
let buttons = document.querySelectorAll(".buttons button");
let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "=") {
            expression = eval(expression);
            display.textContent = expression;
        } else if (value === "C") {
            expression = "";
            display.textContent = "0";
        } else {
            expression += value;
            display.textContent = expression;
        }
    });
});
