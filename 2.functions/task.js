'use strict'
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  min = Math.min(...arr);
  max = Math.max(...arr);

  avg = parseFloat((sum / arr.length).toFixed(2));
    
    return { min: min, max: max, avg: avg };
  }

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
