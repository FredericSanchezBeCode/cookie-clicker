let scoreTotal;
let scoreOnClick = 1;
let multiplierPrice = 15;


 /**
  * Fonction multiplicateur
  */multiply() {
    buyMultiplier();
    increaseScoreOnClick();
}
/**
 * Fonction acheter multiplicateur
 */buyMultiplier() {
     scoreTotal = scoreTotal - multiplierPrice;
     multiplierPrice = multiplierPrice * 1.15;
     return Math.floor(multiplierPrice);
 }
/**
 * Fonction augmenter multiplicateur
 */increaseScoreOnClick() {
    let scoreIncreaseOnClick = scoreIncreaseOnClick + 1;
    return scoreIncreaseOnClick;
 }
