const button = document.getElementById("button");

let inputId = document.getElementById("inputUnit");
let choiceId = document.getElementById("unitOptions");
let result = document.getElementById("result");

function unitConverter () {
    const input = inputId.value;
    const choice = choiceId.value;
    console.log(`Value for choice: ${choice} and value for input: ${input}`);

    if(input.trim() === ""){
        alert("Pls input a value");
    } else if (choice.trim() === "" || choice !== "toKilometers" && choice !== "toMiles") {
        alert("You've Deleted the default value or you manually replaced the value!");
    } else if (choice === "toKilometers") {
        let toKilometers = input / 0.621371;
        result.innerHTML = `Result: ${toKilometers.toFixed(3)} kilometers`;
    } else if (choice === "toMiles") {
        let toMiles = input / 1.60934;
        result.innerHTML = `Result: ${toMiles.toFixed(3)} miles`;
    }
}

button.addEventListener("click", unitConverter);



