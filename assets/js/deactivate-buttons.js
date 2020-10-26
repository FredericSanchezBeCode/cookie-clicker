/**
 * Fonction de rafraîchissement du score
 */setInterval(checkPrices(),100);     

/**
 * Fonction d'activation des boutons
 */checkPrices() {
    canAffordMultiplier();
    canAffordBonus();
 }
/**
 * Activation visuelle (class CSS "canAfford")
 */activate() {
    document.getElementsByClassName("btn").toggle("canAfford")
 }
 /**
 * Fonction d'activation du multiplicateur
 */canAffordMultiplier() {
    if (scoreTotal >= multiplierPrice) {
        document.getElementById("runMultiplier").addEventListener("click", multiply()); 
        activate();
    }
}
/**
 * Fonction d'activation du boost 200%
 */canAffordBonus() {
    if (scoreTotal >= bonusPrice) {
        document.getElementById("runBonus").addEventListener("click", boost());
        activate();
    }
}