let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 5;

let btnId = document.getElementById("submit-btn");
let inputId = document.getElementById("inputId");
let alertBox = document.getElementById("alertBox");

const tryAgainBtn = document.createElement("button");
tryAgainBtn.textContent = "Try Again?";
tryAgainBtn.className = "btn-dsgn";
tryAgainBtn.style.display = "none";
document.querySelector(".form").appendChild(tryAgainBtn);

function checkGuessNumber() {

    const guess = parseInt(inputId.value, 10);

    if (guess < 1 || guess > 50 || isNaN(guess)) {
        alertBox.className = "alert alert-danger";
        alertBox.textContent = "Please enter a number between 1 and 50.";
        return;
    }
    
    if(guess === randomNumber){
        alertBox.className = "alert alert-success";
        alertBox.textContent = "You Win!";
        btnId.style.display = "none";
        tryAgainBtn.style.display = "block";
    } else if (guess > randomNumber){
        attempts--;
        alertBox.className = "alert alert-warning";
        alertBox.textContent = `Too high! try again, ${attempts} remaining`;
    } else {
        attempts--;
        alertBox.className = "alert alert-warning";
        alertBox.textContent = `Too low! try again, ${attempts} remaining`;
    }

    if(attempts === 0 && alertBox.textContent !== "You Win!"){
        alertBox.className = "alert alert-danger";
        alertBox.textContent = `You Lost! Game Over`;
        btnId.style.display = "none";
        tryAgainBtn.style.display = "block";
    }
}

function resetGame () {
    randomNumber = Math.floor(Math.random() * 50) + 1;
    attempts = 5;
    inputId.value = "";
    alertBox.className = "alert";
    alertBox.textContent = "";
    tryAgainBtn.style.display = "none";
    btnId.style.display = "block";
}

btnId.addEventListener("click", checkGuessNumber);
tryAgainBtn.addEventListener("click", resetGame);