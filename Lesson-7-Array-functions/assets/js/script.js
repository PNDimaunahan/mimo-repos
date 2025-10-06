let startButton = document.querySelector('.start-button');
let progressContainer = document.querySelector('.progress-container');
let progressBar = document.querySelector('.progress-bar');
let alertContainer = document.querySelector('.alert');
let questionContainer = document.querySelector('.trivia-question');
let optionsContainer = document.querySelector('.trivia-options');

const questions = [
    { question: "Which company created the iPhone?", options: ["Apple", "Samsung", "Google", "Nokia"], answer: "Apple" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: "Mars" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Ozone", "Oxide"], answer: "Oxygen" },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Arabian", "Gobi", "Antartic Desert"], answer: "Antartic Desert" },
]

let currentQuestion = 0;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    optionsContainer.style.display = "flex";
    showQuestion();
});

function showQuestion(){
    if(currentQuestion < questions.length){
        const qCounter = questions[currentQuestion];
        questionContainer.innerHTML = `<h3>${qCounter.question}</h3>`;
        optionsContainer.innerHTML = '';
        progressContainer.style.display = 'block';
        qCounter.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option
            button.classList.add('option')
            button.addEventListener('click', () => {
                const allButtons = optionsContainer.querySelectorAll('button');
                allButtons.forEach(btn => btn.disabled = true);
                checkAnswer(option);
            });
            optionsContainer.appendChild(button)
        })
        updateProgress()
    } else {
        questionContainer.innerHTML = `<h3>You finished! <br>Score: ${score} / ${questions.length}</h3>`;
        optionsContainer.style.display = 'none';
        progressBar.style.width = '100%';
        startButton.style.display = 'block';
        startButton.textContent = 'Restart';
        startButton.addEventListener('click', () => location.reload());
    }
}

let score = 0;

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer
    
    if (selected === correct) {
        score++;
        showAlert(' Correct!', 'green')
    } else {
        showAlert(` Wrong! Correct answer is ${correct}`, 'red')
    }
    currentQuestion++
    setTimeout(showQuestion, 1000)
}

function showAlert(message, color) {
    alertContainer.textContent = message
    alertContainer.style.color = color
    setTimeout(() => (alertContainer.textContent = ''), 1000)
}

function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100
    progressBar.style.width = `${progress}%`
}

