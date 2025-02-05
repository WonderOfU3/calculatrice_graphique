const buttons = document.querySelectorAll("#all_buttons input");
const resultDiv = document.getElementById("result");
let calc = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "=") {
            try {
                resultDiv.textContent = eval(calc);
                calc = resultDiv.textContent;
            } catch {
                resultDiv.textContent = "Error";
                calc = "";
            }
        } else if (value === "DEL") {
            calc = calc.slice(0, -1);
        } else if (value === "AC") {
            calc = "";
        } else {
            calc += value;
        }
        resultDiv.textContent = calc;
    });
});
