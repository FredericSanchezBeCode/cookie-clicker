let isBonusAutoClickAllowed = false;

// a particular event will change the status of isBonusAutoClickAllowed to true
// ...

function checkIfBonusAutoClick(){
  if (isBonusAutoClickAllowed){
    score++;
    setTimeout(checkIfBonusAutoClick,500);
  }
}

checkIfBonusAutoClick();

