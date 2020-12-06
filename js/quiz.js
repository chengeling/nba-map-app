const quizTitle = document.querySelector('.app-right-panel__quiz-title');
const startBtn = document.querySelector('.app-right-panel__quiz-btn');
const quizContainer = document.querySelector('.app-right-panel__quiz');
const quizBox = document.querySelector('.app-right-panel__question-box');

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    quizTitle.style.display = 'none';
    setTimeout(() => {
        quizBox.classList.remove('app-right-panel__question-box');
        quizBox.classList.add('app-right-panel__question-box--open');
    },600)
})

const xhr = new XMLHttpRequest();
xhr.open('GET', 'quiz.json');
xhr.responseType = 'json';
xhr.send();
xhr.addEventListener('load', () => {
    const questions = xhr.response.questions;
    for(let question of questions) {
        const { q, a } = question;
        const questionText = document.createElement('h3');
        questionText.classList.add('question-text')
        questionText.textContent = q;
        quizBox.appendChild(questionText);
        const answerInput = document.createElement('input');
        answerInput.classList.add('answer-input')
        quizBox.appendChild(answerInput);
    }

    const checkAnswersBtn = document.createElement('button');
    checkAnswersBtn.textContent = 'Sprawdź!';
    checkAnswersBtn.classList.add('check-btn')
    quizBox.appendChild(checkAnswersBtn);

    //Checking answers
    checkAnswersBtn.addEventListener('click', () => {
        let score = 0;
        const questionsLength = questions.length;
        for(let question of questions) {
            const { q, a } = question;
            const userAnswer = document.querySelector('.answer-input');
            if(userAnswer.value.toLowerCase() === a.toLowerCase()) {
                score++;
                userAnswer.classList.add('answer-input--good');
            } else {
                userAnswer.classList.add('answer-input--bad');
            }
        }
        alert(`Twój wynik to ${score}/${questionsLength}`)
    })
})