//exercise one
function range(start, end){
  var newArray = []
  for (var i=start; i<=end; i++){
    newArray.push(i)
  }
  console.log(newArray);
}

function sum(sumArray) {
  for (var i=0; i<=sumArray.length; i++){
    totalSum += sumArray[i];
  }
  console.log(totalSum);
}
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
