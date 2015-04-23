function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var sixteenArray = [],
    seventeenArray = [],
    eighteenArray = [],
    nineteenArray = [],
    twentyArray = [],
    twentyOneArray = [];
function arrayPush(array){
  for (var i = 0; i < array.length; i++){
    if ((Math.ceil(array[i].died/100)) === 16) {
      sixteenArray.push((array[i].died)-(array[i].born));
    } else if ((Math.ceil(array[i].died/100)) === 17) {
      seventeenArray.push((array[i].died)-(array[i].born));
    } else if ((Math.ceil(array[i].died/100)) === 18) {
  		eighteenArray.push((array[i].died)-(array[i].born));
    } else if ((Math.ceil(array[i].died/100)) === 19) {
  		nineteenArray.push((array[i].died)-(array[i].born));
    } else if ((Math.ceil(array[i].died/100)) === 20) {
  		twentyArray.push((array[i].died)-(array[i].born));
    } else if ((Math.ceil(array[i].died/100)) === 21) {
  		twentyOneArray.push((array[i].died)-(array[i].born));
    }
  }
  console.log(Math.floor(average(sixteenArray)*10)/10);
  console.log(Math.floor(average(seventeenArray)*10)/10);
  console.log(Math.floor(average(eighteenArray)*10)/10);
  console.log(Math.floor(average(nineteenArray)*10)/10);
  console.log(Math.floor(average(twentyArray)*10)/10);
  console.log(Math.floor(average(twentyOneArray)*10)/10;
}

arrayPush(ancestry);
// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
