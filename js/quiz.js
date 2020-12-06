const quizTitle = document.querySelector('.app-right-panel__quiz-title');
const quizDesc = document.querySelector('.app-right-panel__quiz-desc');
const startBtn = document.querySelector('.app-right-panel__quiz-btn');
const quizContainer = document.querySelector('.app-right-panel__quiz');
const quizBox = document.querySelector('.app-right-panel__question-box');

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    quizTitle.style.display = 'none';
    quizDesc.style.display = 'none';
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
    const questionsLength = questions.length;
    
    //Generate questions
    for(let i = 1; i < questionsLength + 1; i++) {
        const { q, a } = questions[i - 1];
        const questionText = document.createElement('h3');
        questionText.classList.add(`question-text${i}`)
        questionText.textContent = q;
        quizBox.appendChild(questionText);
        const answerInput = document.createElement('input');
        answerInput.classList.add(`answer-input${i}`)
        quizBox.appendChild(answerInput);
    }

    const checkAnswersBtn = document.createElement('button');
    checkAnswersBtn.textContent = 'Sprawdź!';
    checkAnswersBtn.classList.add('check-btn')
    quizBox.appendChild(checkAnswersBtn);

    //Checking answers
    checkAnswersBtn.addEventListener('click', () => {
        let score = 0;
        for(let i = 1; i < questionsLength + 1; i++) {
            const userAnswer = document.querySelector(`.answer-input${i}`);
            const { q, a } = questions[i - 1];
            if(userAnswer.value.toLowerCase() === a.toLowerCase()) {
                score++;
                userAnswer.style.borderColor = 'green';
            } else {
                userAnswer.style.borderColor = 'red';
            }
        }
        alert(`Twój wynik to ${score}/${questionsLength}`)
    })
})