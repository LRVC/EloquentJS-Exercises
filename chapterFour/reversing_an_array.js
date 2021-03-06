function reverseArray(array) {
  var arrayCount = array.length
  var newArray = [];
  for (var i = 0; i < arrayCount; i++) {
     var elem = array.pop(i);
     newArray.push(elem);
  }
  return newArray;
}


function reverseArrayInPlace(array) {
  var arrayCount = array.length
  for (var i = 0; i < Math.floor(arrayCount/2); i++) {
     var elem = array[i];
     array[i] = array[arrayCount - 1 - i];
     array[arrayCount - 1 - i] = elem;
  }
  return array;
}
