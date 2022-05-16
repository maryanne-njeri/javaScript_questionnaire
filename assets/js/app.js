// Functions
function quizBuilder() {
    // output variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
    (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // for each available answer...
        for(letter in currentQuestion.answers){

            // add an HTML radio button
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
        </div>`
        );
    });

    // Combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer) {

            // add to the number of correct answers
            numCorrect ++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }

        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    if (numCorrect*20 >= 80) {
        resultsContainer.innerHTML = `${numCorrect*20}% <p>Excellent &#128519;</p>`;
        // show number of correct total score
    } else if(numCorrect*20 >= 50) {
        resultsContainer.innerHTML = `${numCorrect*20}% <p>Fair &#128522;</p>`;
    } else {
        resultsContainer.innerHTML = `${numCorrect*20}% <p>Poor &#128542;</p>`;
    }
}

function showSlide(n) {

    slides[currentSlide].classList.remove('active-slide');

    slides[n].classList.add('active-slide');

    currentSlide = n;

    if(currentSlide === 0){
        previousButton.style.display = 'none';
    }

    else {
        previousButton.style.display = 'inline-block';
    }

    if(currentSlide === slides.length-1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }

    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {     
        question: "What are JavaScript Data Types ?",
        answers: {
            a: "Number, String, Boolean, Object, Undefined",
            b: "String",
            c: "Boolean and Array",
            d: "Undefined",
        },
        
        correctAnswer: "a",

    },

    {
        question: "Why Javascript ?",
        answers: {
            a: "Specifies the layout of web pages",
            b: "To define the content of web pages",
            c: "programs the behavior of web pages",
            d: "It is a server language",
        },
        
        correctAnswer: "c"
    },

    {
        question: "What is the use of isNaN function ?",
        answers: {
            a: "Not available",
            b: "isNan function returns true if the argument is not a number; otherwise, it is false.",
            c: "isNaN function returns true when argument is a number",
            d: "It is still not known",
        },
        
        correctAnswer: "b",
    },

    {
        question: "Which company developed JavaScript ?",
        answers: {
            a: "Java",
            b: "Netscape",
            c: "Google",
            d: "Firefox",
        },

        correctAnswer: "b",
    },

    {
        question: "What is 'this' keyword in JavaScript ?",
        answers: {
            a: "Grammatical keyword",
            b: "None of the above",
            c: "referencial keyword",
            d: "'This' keyword refers to the object from where it was called.",
        },
        
        correctAnswer: "d",
    },
];

quizBuilder();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// first slide
showSlide(currentSlide);

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
