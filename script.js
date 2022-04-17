const startBtn = document.getElementById('start-btn');
const homeScreen = document.querySelector('.home');
const gameDisplay = document.querySelector('.game');
const gameSpaces = document.querySelectorAll('.space');

startBtn.addEventListener('click', e => {
    const hideHomeScreen = homeScreen.style.display = "none";
    const showGameboard = gameDisplay.style.display = "grid";
})

gameSpaces.forEach(space => {
    space.addEventListener('click', e => {
        if (space.childNodes.length === 0) {
            const addX = document.createElement('img');
            addX.classList.add('icon', 'x');
            addX.src = "/images/x.png";
            space.appendChild(addX);
        } else {
            return;
        }
    })
});


//Gameboard Module
const gameboard = (() => {
    let movesArray = ["O", "X", "O", "O", "O", "X", "O" , "X"];
})();


//Game Module
const game = (() => {

})();


//Player Factory
const players = () => {
    
}