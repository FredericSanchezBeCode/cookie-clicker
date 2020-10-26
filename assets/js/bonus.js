
// this code is in the buy auto-click button
function autoClick(){
  if (score > 20){
    score+= 20;
    updateScreen();
  }
  setTimeout(autoClick,500);
}


