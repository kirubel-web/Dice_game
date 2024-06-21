# Dice Game

This project is a simple dice game built with HTML, CSS, and JavaScript. The game can be played by two players, and the objective is to be the first player to reach 20 points. The game uses basic DOM manipulation to update the scores and manage the game state.

[!image](image.png)

## Table of Contents

- [Gameplay](#gameplay)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [How to Play](#how-to-play)
- [JavaScript Code Explanation](#javascript-code-explanation)
- [License](#license)

## Gameplay

- **Players:** 2
- **Objective:** Be the first player to reach 20 points.
- **Rules:**
  - Players take turns rolling a dice.
  - If a player rolls a number other than 1, that number is added to their current score.
  - If a player rolls a 1, their current score is reset to 0 and it becomes the next player's turn.
  - A player can choose to "Hold" to add their current score to their total score. It then becomes the next player's turn.
  - The first player to reach 20 points in their total score wins the game.

## Project Structure

The project consists of the following files:

- `index.html`: The HTML structure of the game.
- `styles.css`: The CSS styling for the game.
- `script.js`: The JavaScript code that controls the game logic.

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kirubel-web/Dice_game.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd Dice_game
   ```

3. **Open the `index.html` file in your web browser:**
   ```sh
   open index.html
   ```

## How to Play

1. Open the game in your web browser.
2. Player 1 starts the game by clicking the "Roll Dice" button.
3. If Player 1 rolls a number other than 1, the number is added to their current score.
4. Player 1 can continue rolling or choose to "Hold" to add the current score to their total score.
5. If Player 1 rolls a 1, their current score is reset to 0 and it becomes Player 2's turn.
6. Player 2 follows the same rules.
7. The first player to reach 20 points in their total score wins the game.
8. Click the "New Game" button to start a new game.

## JavaScript Code Explanation

The JavaScript code is responsible for the game logic and DOM manipulation. Below is an explanation of key parts of the code:
[!flowchart](pig-game-flowchart.png)

### Initialization Function

The `init` function sets up the initial state of the game, including resetting scores and setting the active player:

```javascript
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
```

### Switch Player Function

The `switchPlayer` function switches the active player and resets the current score:

```javascript
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
```

### Roll Dice Event Listener

The event listener for the "Roll Dice" button handles the dice roll logic:

```javascript
document.querySelector('.btn--roll').addEventListener('click', function () {
    if (playing) {
        diceEl.classList.remove('hidden');
        const diceRoll = Math.trunc(Math.random() * 6 + 1);
        diceEl.src = `dice-${diceRoll}.png`;
        if (diceRoll !== 1) {
            currentScore = currentScore + diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});
```

### Hold Button Event Listener

The event listener for the "Hold" button adds the current score to the total score and checks for a winner:

```javascript
document.querySelector('.btn--hold').addEventListener('click', function () {
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
});
```

### New Game Event Listener

The event listener for the "New Game" button resets the game state:

```javascript
document.querySelector('.btn--new').addEventListener('click', function () {
    init();
});
```

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as you see fit.

---

Enjoy the game and have fun! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.