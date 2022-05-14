let continue_btn = document.querySelector('.continue-btn');
let intro = document.querySelector('.intro');
let board = document.querySelector('.quiz-board');

function showQuizBoard() {
    if (intro.style.display === 'none') {
        intro.style.display = 'block';
        board.style.display = 'none';
    } else {
        intro.style.display = 'none';
        board.style.display = 'block';
    }
}

continue_btn.addEventListener('click', showQuizBoard);