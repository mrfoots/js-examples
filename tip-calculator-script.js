let mealAmount = document.getElementById('total');
let calcButton = document.querySelector('button');
let tip1 = document.getElementById('ten');
let tip2 = document.getElementById('fifteen');
let tip3 = document.getElementById('twenty');

calcButton.onclick = function() {
  let total = Number(mealAmount.value);

  tip1.textContent = "10% Tip: $" + (Math.round(total * .1 * 100) / 100).toFixed(2);
  tip2.textContent = "15% Tip: $" + (Math.round(total * .15 * 100) / 100).toFixed(2);
  tip3.textContent = "20% Tip: $" + (Math.round(total * .2 * 100) / 100).toFixed(2);
}
