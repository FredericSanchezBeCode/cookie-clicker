
const click = document.getElementById('runClick');

function Display() {
    scoreDisplay.innerHTML = scoreTotal;
}


document.getElementById('runclick').addEventListener("click", function () {
    scoreTotal = scoreTotal + IncreaseOnClick;
    return scoreTotal;
    Display();
}
document.getElementById('runAutoclick').addEventListener("click", function () {
    scoreTotal = scoreTotal - autoClickPrice;
    return scoreTotal;
    Display();
}
document.getElementById('runMultiplier').addEventListener('click', () =>{ 
    scoreTotal = scoreTotal - multiplierPrice;
    return scoreTotal;
    Display();
}



    setInterval(function () {
        scoreTotal = scoreTotal + autoClick;
        return scoreTotal;
        Display();
    }, 1000;
    
    setInterval(function () {
        Display();
    }, 200;


