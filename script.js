const startBtn = document.getElementById('start-btn');
const homeScreen = document.querySelector('.home');

startBtn.addEventListener('click', e => {
    const hideHomeScreen = homeScreen.style.display = "none";
})