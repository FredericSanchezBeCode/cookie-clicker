let scoreTotal;
let scoreOnClick = 1;
let multiplierPrice = 15;

/**
 * Fonction multiplicateur
 */multiply() {
    buyMultiplier();
    increaseMultiplierPrice();
    increaseScoreOnClick();
    displayMultiplier();
    tellMultiplierPrice();
 }
/**
 * Fonction acheter multiplicateur
 */buyMultiplier() {
    scoreTotal = scoreTotal - multiplierPrice;
    return scoreTotal;
 }
/**
 * Fonction augmenter prix multiplicateur
 */increaseMultiplierPrice() {
    multiplierPrice = multiplierPrice * 1.15;
    return Math.floor(multiplierPrice);
 }
/**
 * Fonction augmenter multiplicateur
 */increaseScoreOnClick() {
    let scoreIncreaseOnClick = scoreIncreaseOnClick + 1;
    return scoreIncreaseOnClick;
 }
/**
 * Fonction afficher multiplicateur
 */displayMultiplier() {
    document.getElementById("multiplier").innerHTML = `Multiplier x${scoreIncreaseOnClick}`
 }
/**
 * Fonction afficher coût amélioration multiplicateur
 */tellMultiplierPrice() {
    document.getElementById('runMultiplier').innerHTML = `Améliorer multiplicateur: ${multiplierPrice}`
 }
 

