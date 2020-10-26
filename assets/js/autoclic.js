
document.getElementById("runAutoClic").addEventListener("click",() =>{
  // this part of code will be executed only 1 time
  // when the player buy the autoclick item.
  // decrease score by the price of autoclick -20

  // to be sure it execute only one time, we first desable the button
  document.getElementById("runAutoClic").disabled = true;
  score-= 20;
  
  // this function autoClick will be executed every 500 milliseconds
  function autoClick(){    
    score+= 20;      
    setTimeout(autoClick,500);
  }

});



