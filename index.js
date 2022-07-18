let count = 0;

// Decrease
document.getElementById("decreaseButton").onclick = function(){
  count -= 1;
  document.getElementById("counterLabel").innerHTML = count;
}

// Reset
document.getElementById("resetButton").onclick = function(){
  count = 0;
  document.getElementById("counterLabel").innerHTML = count;
}

// Increase
document.getElementById("increaseButton").onclick = function(){
  count += 1;
  document.getElementById("counterLabel").innerHTML = count;
}