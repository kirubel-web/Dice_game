'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');


let scores, currentScore, activePlayer, playing;



const init = function () {

    scores = [0, 0];

    currentScore = 0;

    activePlayer = 0;

    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    currentScore = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}




document.querySelector('.btn--roll').addEventListener('click', function () {
    if (playing) {
        diceEl.classList.remove('hidden');
        const diceRoll = Math.trunc(Math.random() * 6 + 1);
        console.log(diceRoll);

        diceEl.src = `dice-${diceRoll}.png`;

        if (diceRoll !== 1) {
            currentScore = currentScore + diceRoll;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;



        } else {
            switchPlayer();


        }

    }



    /* if (diceRoll == 1) {
        const image = document.querySelector('.dice');
        image.src = 'dice-1.png';

    } else if (diceRoll == 2) {
        const image = document.querySelector('.dice');
        image.src = 'dice-2.png';

    } else if (diceRoll == 3) {
        const image = document.querySelector('.dice');
        image.src = 'dice-3.png';
    } else if (diceRoll == 4) {
        const image = document.querySelector('.dice');
        image.src = 'dice-4.png';
    } else if (diceRoll == 5) {
        const image = document.querySelector('.dice');
        image.src = 'dice-5.png';
    } else if (diceRoll == 6) {
        const image = document.querySelector('.dice');
        image.src = 'dice-6.png';
    } */


}
)

document.querySelector('.btn--hold').addEventListener('click', function () {
    console.log('Hold Button pressed');

    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();


        }

    }




})

document.querySelector('.btn--new').addEventListener('click', function () {



    init();

})