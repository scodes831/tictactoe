

//Player factory
const playerFactory = (name, icon, isCurrentPlayer) => {
    getIcon = () => icon;
    isPlayersTurn = () => isCurrentPlayer;
    toggleTurn = () => {
        if (isCurrentPlayer) {
            isCurrentPlayer = false;
        } else if (isCurrentPlayer === false) {
            isCurrentPlayer = true;
        }
    }
    return {getIcon, isPlayersTurn, toggleTurn}
}

const playerX = playerFactory("Player 1", "X", true);
const playerO = playerFactory("Player 2", "O", false);

const homeScreen = document.querySelector('.home');
const gameDisplay = document.querySelector('.game');
const spaces = document.querySelectorAll('.space');
const container = document.querySelector('.container');

//Take turn module
const takeTurn = (() => {

    const startBtn = document.getElementById('start-btn');
    
    startBtn.addEventListener('click', e => {
        const hideHomeScreen = homeScreen.style.display = "none";
        const showGameboard = gameDisplay.style.display = "grid";
    })

    let movesArray = ["","","","","","","","",""];
    
    const showMove = () => {
        spaces.forEach(space => {
            space.addEventListener('click', e => {
                if (space.childNodes.length === 0) {
                    const addIcon = document.createElement('h2');
                    addIcon.classList.add('move');
                    space.appendChild(addIcon);
                    if(playerX.isPlayersTurn()) {
                        addIcon.innerText = playerX.getIcon();
                        let indexNum = +e.target.id - 1;
                        movesArray.splice(indexNum, 1, playerX.getIcon());
                        //not adding selection to movesArray on second round onward
                        console.log(playerX.getIcon());
                        playerX.toggleTurn();
                        playerO.toggleTurn();
                    } else {
                        addIcon.innerText = playerO.getIcon();
                        let indexNum = +e.target.id - 1;
                        movesArray.splice(indexNum, 1, playerO.getIcon());
                        console.log(playerO.getIcon());
                        playerO.toggleTurn();
                        playerX.toggleTurn();
                    }
                }
                gameResults.checkThreeInARow();
            })
    })}

    return {
        showMove,
        movesArray,
    }
})();

//Game Results module
const gameResults = (() => {

    let result = "";

    const checkThreeInARow = () => {
        if (takeTurn.movesArray[0] === "X" && takeTurn.movesArray[1] === "X" && takeTurn.movesArray[2] === "X") {
            result = "X wins!";
            displayResults();
        } else if (takeTurn.movesArray[0] === "O" && takeTurn.movesArray[1] === "O" && takeTurn.movesArray[2] === "O") {
            result = "O wins!";
            displayResults();
        } else if (takeTurn.movesArray[3] === "X" && takeTurn.movesArray[4] === "X" && takeTurn.movesArray[5] === "X") {
            result = "X wins!";
            displayResults();
        } else if (takeTurn.movesArray[3] === "O" && takeTurn.movesArray[4] === "O" && takeTurn.movesArray[5] === "O") {
            result = "O wins!";
            displayResults();
        } else if (takeTurn.movesArray[6] === "X" && takeTurn.movesArray[7] === "X" && takeTurn.movesArray[8] === "X") {
            result = "X wins!";
            displayResults();
        } else if (takeTurn.movesArray[6] === "O" && takeTurn.movesArray[7] === "O" && takeTurn.movesArray[8] === "O") {
            result = "O wins!";
            displayResults();
        } else if (takeTurn.movesArray[0] === "X" && takeTurn.movesArray[3] === "X" && takeTurn.movesArray[6] === "X") {
            result = "X wins!";
            displayResults();
        } else if (takeTurn.movesArray[0] === "O" && takeTurn.movesArray[3] === "O" && takeTurn.movesArray[6] === "O") {
            result = "O wins!";
            displayResults();
        } else if (takeTurn.movesArray[1] === "X" && takeTurn.movesArray[4] === "X" && takeTurn.movesArray[7] === "X") {
            result = "X wins!";
            displayResults();
        } else if (takeTurn.movesArray[1] === "O" && takeTurn.movesArray[4] === "O" && takeTurn.movesArray[7] === "O") {
            result = "O wins!";
            displayResults();
        } else if (takeTurn.movesArray[2] === "X" && takeTurn.movesArray[5] === "X" && takeTurn.movesArray[8] === "X") {
            result = "X wins!";
            displayResults();
        } else if (takeTurn.movesArray[2] === "O" && takeTurn.movesArray[5] === "O" && takeTurn.movesArray[8] === "O") {
            result = "O wins!";
            displayResults();
        } else if (takeTurn.movesArray[0] === "X" && takeTurn.movesArray[4] === "X" && takeTurn.movesArray[8] === "X") {
            result = "X wins!";
            displayResults();
        } else if (takeTurn.movesArray[0] === "O" && takeTurn.movesArray[4] === "O" && takeTurn.movesArray[8] === "O") {
            result = "O wins!";
            displayResults();
        } else if (takeTurn.movesArray[2] === "X" && takeTurn.movesArray[4] === "X" && takeTurn.movesArray[6] === "X") {
            result = "X wins!";
            displayResults();
        } else if (takeTurn.movesArray[2] === "O" && takeTurn.movesArray[4] === "O" && takeTurn.movesArray[6] === "O") {
            result = "O wins!";
            displayResults();
        } else if ((!takeTurn.movesArray.includes(""))) {
            checkForADraw();
        }
    }

    const checkForADraw = () => {
        if (!takeTurn.movesArray.includes("")) {
            if (takeTurn.movesArray[0] !== "" && takeTurn.movesArray[1] !== "" && takeTurn.movesArray[2] !== "" && takeTurn.movesArray[3] !== "" &&
                takeTurn.movesArray[4] !== "" && takeTurn.movesArray[5] !== "" && takeTurn.movesArray[6] !== "" && takeTurn.movesArray[7] !== "" && 
                takeTurn.movesArray[8] !== "") {
                    console.log("it's a draw!");
                    result = "It's a draw!";
                    displayResults();
            }
        }
    }

    const displayResults = () => {
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');
        gameDisplay.parentNode.insertBefore(resultContainer, gameDisplay);
        const resultMessage = document.createElement('h2');
        resultMessage.innerText = result;
        resultContainer.appendChild(resultMessage);
        const playAgainBtn = document.createElement('button');
        playAgainBtn.innerText = "Play Again";
        resultContainer.appendChild(playAgainBtn);
        playAgainBtn.addEventListener('click', clearBoard);
    }

    const clearBoard = () => {
        const moves = document.querySelectorAll('.move');
        moves.forEach(move => {
            const parent = move.parentNode;
            parent.removeChild(move);
        })
        const message = document.querySelector('.result-container');
        message.parentNode.removeChild(message);
        if (playerO.isPlayersTurn()) {
            playerO.toggleTurn();
            playerX.toggleTurn();
        }
        takeTurn.movesArray = ["","","","","","","","",""];
        console.log(takeTurn.movesArray);    
    }
        
    return {
        checkThreeInARow,
    }
})();

takeTurn.showMove();
gameResults.checkThreeInARow();







// //Player Factory
// const createPlayer = (name, icon, turn) => {
//     const player  = {};
//     const takeTurn = () => {
//         // addMove();
//     }
//     return {name, icon, turn, player, takeTurn};
// }

// //Gameboard Module
// const gameboard = (() => {
//     const startBtn = document.getElementById('start-btn');
//     const homeScreen = document.querySelector('.home');
//     const gameDisplay = document.querySelector('.game');

//     startBtn.addEventListener('click', e => {
//         const hideHomeScreen = homeScreen.style.display = "none";
//         const showGameboard = gameDisplay.style.display = "grid";
//     })

//     let movesArray = ["","","","","","","", "",""];
//     createBoard();
//     function createBoard() {
//         for (let i=1; i <= movesArray.length; i++) {
//             const gameSpaces = document.createElement('div');
//             gameSpaces.classList.add('spaces');
//             gameDisplay.appendChild(gameSpaces);
//             function addMove() {
//                 gameSpaces.forEach(space => {
//                     space.addEventListener('click', e => {
//                         if (space.childNodes.length === 0) {
//                             const newMove = document.createElement('h2');
//                             newMove.innerText = icon;
//                             space.appendChild(newMove);
//                         }
//                     })
//                 })
//             }
//         }
//     }

//     return {movesArray, createBoard};
// })


// //Game Module
// const game = (() => {
//     const playerX = createPlayer('Player 1', 'X', 'true');
//     const playerO = createPlayer('Player 2', 'O', 'false');

//     // gameboard.createBoard.call(game);

//     function checkThreeInARow() {
//         if ((movesArray[0] === movesArray[1] && movesArray[1] === movesArray[2]) ||
//             (movesArray[3] === movesArray[4] && movesArray[4] === movesArray[5]) ||
//             (movesArray[6] === movesArray[7] && movesArray[7] === movesArray[8]) ||
//             (movesArray[0] === movesArray[3] && movesArray[3] === movesArray[6]) ||
//             (movesArray[1] === movesArray[4] && movesArray[4] === movesArray[7]) ||
//             (movesArray[2] === movesArray[5] && movesArray[5] === movesArray[8]) ||
//             (movesArray[0] === movesArray[4] && movesArray[4] === movesArray[8]) ||
//             (movesArray[2] === movesArray[4] && movesArray[4] === movesArray[6])) {
//                 //what to do if there is a win
//             } else {
//                 //what to do if there isn't a win
//             }
//     }
//     return {playerX, playerO};
// })();
