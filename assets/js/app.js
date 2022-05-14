// Select dom Element
let continue_btn = document.querySelector('.continue-btn');
let intro = document.querySelector('.intro');
let board = document.querySelector('.quiz-board');

// Hides the intro page content and displays Quiz Board
function showQuizBoard() {
    // Modify dom Element
    if (intro.style.display === 'none') {
        intro.style.display = 'block';
        board.style.display = 'none';
    } else {
        intro.style.display = 'none';
        board.style.display = 'block';
    }
}

// Questions Object
let questions = {
    titles: [
        'Why Javascript ?', 
        'What are JavaScript Data Types ?', 
        'What is the use of isNaN function ?',
        'Which company developed JavaScript ?',
        'What is ‘this’ keyword in JavaScript ?',
    ],
}

// Iterate through each quiz and display them all
function showQuestions(quiz) {

    // selecting by a query
    let titleDivs = document.querySelectorAll('#title');

    titleDivs.forEach(function(question, key) {
        question.textContent = quiz.titles[key];
    });
}

showQuestions(questions);