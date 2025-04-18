// Selectors
const setupBox = document.getElementById('setup-box');
const gameBox = document.getElementById('game-box');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const startGameButton = document.getElementById('start-game');
const playersHeading = document.getElementById('players-heading');
const turnIndicator = document.getElementById('turn-indicator');
const grid = document.getElementById('grid');
const cells = document.querySelectorAll('[data-cell]');
const winnerMessage = document.getElementById('winner-message');
const restartGameButton = document.getElementById('restart-game');

let currentPlayer = 'X';
let gameActive = true;

// Game Start
startGameButton.addEventListener('click', () => {
    const player1 = player1Input.value.trim() || 'Player 1';
    const player2 = player2Input.value.trim() || 'Player 2';

    playersHeading.textContent = `${player1} (X) vs ${player2} (O)`;
    setupBox.classList.add('hidden');
    gameBox.classList.remove('hidden');
});

// Game Logic
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!gameActive || cell.classList.contains('taken')) return;

        cell.textContent = currentPlayer;
        cell.classList.add('taken');

        if (checkWin(currentPlayer)) {
            gameActive = false;
            winnerMessage.textContent = `${currentPlayer} Wins! 🎉`;
            winnerMessage.classList.remove('hidden');
            restartGameButton.classList.remove('hidden');
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        turnIndicator.textContent = `Chance: ${currentPlayer}`;
    });
});

// Restart Game
restartGameButton.addEventListener('click', () => {
    gameActive = true;
    currentPlayer = 'X';
    turnIndicator.textContent = `Chance: X`;
    winnerMessage.classList.add('hidden');
    restartGameButton.classList.add('hidden');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken');
    });
    gameBox.classList.add('hidden');
    setupBox.classList.remove('hidden');
});

// Check Win
function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => 
        pattern.every(index => cells[index].textContent === player)
    );
}
