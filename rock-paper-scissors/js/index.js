
// Decelerations 
const buttons = document.querySelectorAll('.pick');
const scoreBox = document.getElementById('score');
const mainTag = document.getElementById('main');
const resultWrapper = document.getElementById('selection');
const playAgain = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

const choices=['paper', 'rock', 'scissors'];

let score=0;
let userChoice;

// return a random number
const pickRandomchoice = () => choices[Math.floor(Math.random()*choices.length)];
const updateScore = value => { score+=value; scoreBox.innerText=score;};
const updateElement = (element, choice) => {
    ['btn-paper','btn-rock','btn-scissors'].forEach( item => element.classList.remove(item));
    element.classList.add(`btn-${choice}`);
    const img = element.querySelector('img');
    img.src=`./assets/images/icon-${choice}.svg`;
    img.alt=choice;
};

// Display winner 
const checkWinner = () => {
    const computerChoice = pickRandomchoice();

    updateElement(user_select, userChoice);
    updateElement(computer_select, computerChoice);

    if(userChoice === computerChoice){
        winner.innerText =  'draw';
    }
    else if(userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'rock' && computerChoice==='scissors' ||
        userChoice === 'scissors' && computerChoice==='paper'){
            // user wins
            updateScore(1);
            winner.innerText =  'win';
        }
    else{
        // user loses.
        updateScore(-1);
        winner.innerText =  'lost';
    }

    //show the selection / hide main
    mainTag.style.display='none';
    resultWrapper.style.display = 'flex';
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        checkWinner();
    });
});

playAgain.addEventListener('click', () => {
    mainTag.style.display='flex';
    resultWrapper.style.display = 'none';
    
});
openBtn.addEventListener('click', () => {
    modal.style.display='flex';
    
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';  
});