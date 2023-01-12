"use strict"
// Задание №1
function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return arr;
  } 
  if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }
  arr.push((-b + Math.sqrt(d)) / (2 * a));
  arr.push((-b - Math.sqrt(d)) / (2 * a));

  return arr; // array
}

// Задание №2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  }
  if(countMonths < 0 || amount < 0) {
    return false;
  } 
  
  let monthPercent = percent / 100 / 12;  
  let debt = amount - contribution;       
  let monthlyFee = debt * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1))); 
  let totalAmount = parseFloat((monthlyFee * countMonths).toFixed(2));

  return totalAmount;
}