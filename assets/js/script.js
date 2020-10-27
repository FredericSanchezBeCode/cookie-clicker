// Déclaration de classe et d'objets

let scoreTotal = 0;

class PowerUp {
  constructor(price, button, value) {
    this.price = price;
    this.button = button;
    this.value = value;
  }
}

let multiplier = new PowerUp(10, document.getElementById("runMultiplier"), 1);
let bonus = new PowerUp(200, document.getElementById("runBonus"), 0);
let autoClick = new PowerUp(20, document.getElementById("runAutoClick"), 0);

let powerUps = [multiplier, bonus, autoClick];

/**
 * Fonction click manuel
 */ document.getElementById("runClick").addEventListener("click", () => {
  scoreTotal = scoreTotal + multiplier.value;
  console.log(scoreTotal);
  document.getElementById("scoreTotal").innerHTML = scoreTotal;
});

/**
 *Fonction clic auto
 */ setInterval(function () {
  scoreTotal = scoreTotal + autoClick.value;
  console.log(`Autoclick ${scoreTotal}`);
  document.getElementById("scoreTotal").innerHTML = scoreTotal;
  return scoreTotal;
}, 1000);

/**
 * Fonction de rafraîchissement du score
 */ setInterval(powerUps.forEach(checkPrice(), 100));

/**
 * Fonction de contrôle du prix
 */ function checkPrice() {
  if (canAfford(this.price)) {
    activateButton(this.button);
  }
}

/**
 * Fonction de validation de transaction
 */ function canAfford() {
  if (this.price <= scoreTotal) {
    return true;
  } else {
    this.button.removeEventListener("click", buy(this.price));
  }
}

/**
 * Fonction d'activation de bouton
 */ function activateButton() {
  this.button.toggle("canAfford");
  this.button.addEventListener("click", buy(this.price));
}

/**
 * Fonction d'achat
 */ function buy() {
  scoreTotal = scoreTotal - this.price;
  return scoreTotal;
}
