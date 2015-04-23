function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}


function arrayPush(array){
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
