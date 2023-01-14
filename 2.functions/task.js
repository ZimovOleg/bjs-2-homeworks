//1 задание
function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

//2 задание
function summElementsWorker(...arr) {
  let summ = 0;

  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  return summ;
}

function differenceMaxMinWorker(...arr) {
  let valueMaxMin;

  if (arr.length > 0) {
    valueMaxMin = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  } else {
    valueMaxMin = 0;
  }
  return valueMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; 
  let sumOddElement = 0;  
  let difference = 0;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
    difference = sumEvenElement - sumOddElement;
  }  
}
    return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0
  let countEvenElement = 0
  let average = 0

  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i]
        countEvenElement += 1
      } 
    average = sumEvenElement / countEvenElement
    }
  }
  return average
}

//3 задание
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}