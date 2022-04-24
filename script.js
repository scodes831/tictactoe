const startBtn = document.getElementById('start-btn');
const homeScreen = document.querySelector('.home');
const gameDisplay = document.querySelector('.game');
const spaces = document.querySelectorAll('.space');
const container = document.querySelector('.container');

startBtn.addEventListener('click', e => {
    const hideHomeScreen = homeScreen.style.display = "none";
    const showGameboard = gameDisplay.style.display = "grid";
})

//Player factory
const playerFactory = (name, icon, isCurrentPlayer) => {
    getIcon = () => icon;
    isPlayersTurn = () => isCurrentPlayer;
    takeTurn = () => {
        console.log("I am taking a turn");
    }
    toggleTurn = () => {
        if (isCurrentPlayer) {
            isCurrentPlayer = false;
        } else if (isCurrentPlayer === false) {
            isCurrentPlayer = true;
        }
    }
    return {getIcon, isPlayersTurn, takeTurn, toggleTurn}
}

const playerX = playerFactory("Player 1", "X", true);
const playerO = playerFactory("Player 2", "O", false);

let movesArray = ["","","","","","","","",""];
let result;
let finalResult;
let winner;

// createBoard();

// function createBoard(playerFactory) {

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
                    playerX.toggleTurn();
                    playerO.toggleTurn();
                    return indexNum;
                } else {
                    addIcon.innerText = playerO.getIcon();
                    let indexNum = +e.target.id - 1;
                    movesArray.splice(indexNum, 1, playerO.getIcon());
                    playerO.toggleTurn();
                    playerX.toggleTurn();
                    return indexNum;
                }
            }
            checkThreeInARow();
            checkForADraw();

            if(result = " wins!") {
                const winner = movesArray[indexNum];
                finalResult = winner + result;
            } else if (result = "It's a draw!") {
                finalResult = result;
            }
            
            
            function displayResults() {
                const resultContainer = document.createElement('div');
                resultContainer.classList.add('result-container');
                gameDisplay.parentNode.insertBefore(resultContainer, gameDisplay);
                // container.appendChild(resultContainer);
                const resultMessage = document.createElement('h2');
                resultMessage.innerText = result;
                resultContainer.appendChild(resultMessage);
                const playAgainBtn = document.createElement('button');
                playAgainBtn.innerText = "Play Again";
                resultContainer.appendChild(playAgainBtn);
                playAgainBtn.addEventListener('click', clearBoard);
            }


            function checkThreeInARow() {
                if (((movesArray[0] === movesArray[1] && movesArray[1] === movesArray[2]) && movesArray[0] !== "") ||
                    ((movesArray[3] === movesArray[4] && movesArray[4] === movesArray[5]) && movesArray[3] !== "") ||
                    ((movesArray[6] === movesArray[7] && movesArray[7] === movesArray[8]) && movesArray[6] !== "") ||
                    ((movesArray[0] === movesArray[3] && movesArray[3] === movesArray[6]) && movesArray[0] !== "") ||
                    ((movesArray[1] === movesArray[4] && movesArray[4] === movesArray[7]) && movesArray[1] !== "") ||
                    ((movesArray[2] === movesArray[5] && movesArray[5] === movesArray[8]) && movesArray[2] !== "") ||
                    ((movesArray[0] === movesArray[4] && movesArray[4] === movesArray[8]) && movesArray[0] !== "") ||
                    ((movesArray[2] === movesArray[4] && movesArray[4] === movesArray[6]) && movesArray[2] !== "")) {
                        //need to know what the icon is that got three in a row
                        result = " wins!";
                        displayResults();
                }

                // if ((movesArray[0] === movesArray[1] && movesArray[1] === movesArray[2]) && movesArray[0] !== "") {
                //     let winner = movesArray[0];
                //     result = winner + " wins!";
                // } else if ((movesArray[3] === movesArray[4] && movesArray[4] === movesArray[5]) && movesArray[3] !== "") {
                //     let winner = movesArray[3];
                // } else if ((movesArray[6] === movesArray[7] && movesArray[7] === movesArray[8]) && movesArray[6] !== "") {
                //     let winner = movesArray[6];
                // } else if ((movesArray[0] === movesArray[3] && movesArray[3] === movesArray[6]) && movesArray[0] !== "") {
                //     let winner = movesArray[0];
                // } else if ((movesArray[1] === movesArray[4] && movesArray[4] === movesArray[7]) && movesArray[1] !== "") {
                //     let winner = movesArray[1];
                // } else if ((movesArray[2] === movesArray[5] && movesArray[5] === movesArray[8]) && movesArray[2] !== "") {
                //     let winner = movesArray[2];
                // } else if ((movesArray[0] === movesArray[4] && movesArray[4] === movesArray[8]) && movesArray[0] !== "") {
                //     let winner = movesArray[0];
                // } else if ((movesArray[2] === movesArray[4] && movesArray[4] === movesArray[6]) && movesArray[2] !== "") {
                //     let winner = movesArray[2];
                // }
                //     result = winner + " wins!";
            }

            function checkForADraw() {
                if (movesArray[0] !== "" && movesArray[1] !== "" && movesArray[2] !== "" && movesArray[3] !== "" &&
                    movesArray[4] !== "" && movesArray[5] !== "" && movesArray[6] !== "" && movesArray[7] !== "" && 
                    movesArray[8] !== "") {
                        console.log("it's a draw!");
                        result = "It's a draw!";
                }
            }
            
            function clearBoard() {
                const moves = document.querySelectorAll('.move');
                moves.forEach(move => {
                    const parent = move.parentNode;
                    parent.removeChild(move);
                })
                let movesArray = ["","","","","","","","",""];
                console.log("board cleared");
                console.log(movesArray);
            }
        })
    })
// }





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
