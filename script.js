const display = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

let output = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "=") {
            output = eval(output);
        } else if (button.id === "AC") {
            output = "";
        } else {
            output += button.id;
        }

        display.value = output;
    });
});
