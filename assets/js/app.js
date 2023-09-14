document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector(".board");
    const cells = document.querySelectorAll(".cell");
    const currentPlayer = document.querySelector("#current-player");
    let currentPlayerTurn = 1;
    let gameBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];

    const moveAudio = document.getElementById("move-audio")
    const winAudio = document.getElementById("win-audio")
    function checkForWin(row, col) {
        const directions = [
            [0, 1], [1, 0], [1, 1], [1, -1]
        ];
    
        for (const [dx, dy] of directions) {
            let count = 1;
            const winningSequence = [[row, col]];
    
            for (let i = 1; i <= 3; i++) {
                const newRow = row + i * dx;
                const newCol = col + i * dy;
                if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 &&
                    gameBoard[newRow][newCol] === currentPlayerTurn) {
                    count++;
                    winningSequence.push([newRow, newCol]);
                } else {
                    break;
                }
            }
    
            for (let i = 1; i <= 3; i++) {
                const newRow = row - i * dx;
                const newCol = col - i * dy;
                if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 &&
                    gameBoard[newRow][newCol] === currentPlayerTurn) {
                    count++;
                    winningSequence.push([newRow, newCol]);
                } else {
                    break;
                }
            }
    
            if (count >= 4) {
                return winningSequence;
            }
        }
    
        return false;
    }
    

    function handleCellClick(event) {
        const cell = event.target;
        const col = Array.from(cells).indexOf(cell) % 7;

        for (let row = 5; row >= 0; row--) {
            if (gameBoard[row][col] === 0) {
                gameBoard[row][col] = currentPlayerTurn;
                cell.classList.add(`player${currentPlayerTurn}`);
                updateBoardDisplay();

                let token =  document.querySelector('.current-token')
                token.classList.toggle('one')
                token.classList.toggle('two')

                moveAudio.play();

                if (checkForWin(row, col)) {
                    const winningSequence = checkForWin(row, col);
                    currentPlayer.innerText = `Player ${currentPlayerTurn} wins!`;
                    document.getElementById("win-modal").style.display = "block";
                    document.getElementById("winning-player").innerHTML = currentPlayerTurn;
                    board.removeEventListener("click", handleCellClick);
                    winAudio.play();
            
                     // Highlight the winning sequence with a single border
                        for (const [winRow, winCol] of winningSequence) {
                            const winCellIndex = winRow * 7 + winCol;
                            const winCell = cells[winCellIndex];
                            winCell.classList.add("winning-cell");
                        }
                 }
                  else {
                    currentPlayerTurn = 3 - currentPlayerTurn;
                    currentPlayer.innerText = `Player ${currentPlayerTurn}'s turn`;
                }
                break;
            }
        }
    }

    function updateBoardDisplay() {
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                const cellIndex = row * 7 + col;
                const cell = cells[cellIndex];
                const player = gameBoard[row][col];
                if (player === 0) {
                    cell.classList.remove("player1", "player2");
                } else {
                    cell.classList.add(`player${player}`);
                }
            }
        }
    }
    // Close the modal when the close button is clicked
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function () {
    document.getElementById("win-modal").style.display = "none";
    location.reload()
});

    board.addEventListener("click", handleCellClick);
});
