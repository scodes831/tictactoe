const startBtn = document.getElementById('start-btn');
const homeScreen = document.querySelector('.home');
const gameDisplay = document.querySelector('.game');
const spaces = document.querySelectorAll('.space');

startBtn.addEventListener('click', e => {
    const hideHomeScreen = homeScreen.style.display = "none";
    const showGameboard = gameDisplay.style.display = "grid";
})

//Player factory
const playerFactory = (name, icon, isCurrentPlayer) => {
    takeTurn = () => {
        console.log("I am taking a turn");
    }
    toggleTurn = () => {
        name = "bob";
        isCurrentPlayer = !isCurrentPlayer;
    }
    return {name, icon, isCurrentPlayer, takeTurn, toggleTurn}
}

const playerX = playerFactory("Player 1", "X", true);
const playerO = playerFactory("Player 2", "O", false);

let movesArray = ["","","","","","","","",""];

createBoard();

function createBoard(playerFactory) {
    spaces.forEach(space => {
        space.addEventListener('click', e => {
            if (space.childNodes.length === 0) {
                const addIcon = document.createElement('h2');
                addIcon.classList.add('move');
                space.appendChild(addIcon);
                addIcon.innerText = "X";
                let indexNum = +e.target.id - 1;
                movesArray.splice(indexNum, 1, "X");
                console.log(movesArray);
            }
            checkThreeInARow();
            let result;
            
            
            const resultContainer = document.createElement('div');
            resultContainer.classList.add('result-container');
            body.appendChild(resultContainer);
            const resultMessage = document.createElement('h2');
            resultMessage.innerText = result;
            resultContainer.appendChild(resultMessage);
            const playAgainBtn = document.createElement('button');
            resultContainer.appendChild(playAgainBtn);
            playAgainBtn.addEventListener('click', clearBoard);


            function checkThreeInARow() {
                if (((movesArray[0] === movesArray[1] && movesArray[1] === movesArray[2]) && movesArray[0] !== "") ||
                    ((movesArray[3] === movesArray[4] && movesArray[4] === movesArray[5]) && movesArray[3] !== "") ||
                    ((movesArray[6] === movesArray[7] && movesArray[7] === movesArray[8]) && movesArray[6] !== "") ||
                    ((movesArray[0] === movesArray[3] && movesArray[3] === movesArray[6]) && movesArray[0] !== "") ||
                    ((movesArray[1] === movesArray[4] && movesArray[4] === movesArray[7]) && movesArray[1] !== "") ||
                    ((movesArray[2] === movesArray[5] && movesArray[5] === movesArray[8]) && movesArray[2] !== "") ||
                    ((movesArray[0] === movesArray[4] && movesArray[4] === movesArray[8]) && movesArray[0] !== "") ||
                    ((movesArray[2] === movesArray[4] && movesArray[4] === movesArray[6]) && movesArray[2] !== "")) {
                        console.log("winner");
                        result = "Winner!";
                }
            }

            function checkForADraw() {
                if (movesArray[0] !== "" && movesArray[1] !== "" && movesArray[2] !== "" && movesArray[3] !== "" &&
                    movesArray[4] !== "" && movesArray[5] !== "" && movesArray[6] !== "" && movesArray[7] !== "" && 
                    movesArray[8] !== "") {
                        console.log("it's a draw!");
                        result = "It's a draw!";
                }
            }
            



            // console.log("Is it player 1's turn? " + playerX.turn);
            // if (playerX.turn) {
            //     console.log("it's player 1's turn");
            //     addIcon.innerText = icon;
            //     playerX.turn = "false";
            //     playerO.turn = "true";
            // } else if (playerO.turn) {
            //     addIcon.innerText = icon;
            //     playerO.turn = "false";
            //     playerX.turn = "true";
            // }

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
}





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
