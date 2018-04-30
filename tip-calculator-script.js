let mealAmount = document.getElementById('total');
let calcButton = document.querySelector('button');
let tip1 = document.getElementById('ten');
let tip2 = document.getElementById('fifteen');
let tip3 = document.getElementById('twenty');

calcButton.onclick = function() {
  let total = Number(mealAmount.value);
  /*
    The calculations performed here use the Math.round() function. This function rounds to the nearest whole number. Since money amounts have two decimal places, we multiply the calculation times 100 to move the decimal point to the right two places. Next, we round this number to the nearest whole number. Finally, we divide the resulting whole number by 100 to move the decimal point back two places to the left creating a number rounded to two decimal places.
    The final task is to ensure that there are always two decimal places even if they are zeros. so we put the whole calculation in parentheses and then at the .toFixed(2) on the end.
  */
  tip1.textContent = "10% Tip: $" + (Math.round(total * .1 * 100) / 100).toFixed(2);
  tip2.textContent = "15% Tip: $" + (Math.round(total * .15 * 100) / 100).toFixed(2);
  tip3.textContent = "20% Tip: $" + (Math.round(total * .2 * 100) / 100).toFixed(2);
}
