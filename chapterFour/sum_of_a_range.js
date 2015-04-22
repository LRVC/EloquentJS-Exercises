function range(start, end, step) {
  var newArray = []
  if (step === null){
    step = 1;
  }
  if (step > 0){
    for (var i = start; i <=end; i += step){
      newArray.push(i);
    }
  } else {
    for (var i=start; i>=end; i += step){
      newArray.push(i);
    }
  }
  return newArray;
}

function sum(sumArray) {
  var totalSum = 0;
  for (var i=0; i < sumArray.length; i++){
    totalSum += sumArray[i];
  }
  return totalSum
}
