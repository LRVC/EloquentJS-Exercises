function reverseArray(array) {
  var arrayCount = array.length
  var newArray = [];
  for (var i = 0; i < arrayCount; i++) {
     var elem = array.pop(i);
     newArray.push(elem);
  }
  console.log(newArray);
}

//not working; editing array properly but changes do not persist
function reverseArrayInPlace(array) {
  var arrayCount = array.length
  for (var i = 0; i < arrayCount; i++) {
     var elem = array.pop(i);
     array.push(elem);
  }
}
