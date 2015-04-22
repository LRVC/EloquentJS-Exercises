function testFunction(array){
  var otherArray = [];
  for(var i = 0; i < array.length; i++){
    otherArray.push(array[i]);
  }
  return otherArray;
};

testFunction(["We", "are", "building", "the", "new", "array"])


function testFunctionTwo(num){
  for(var i = 0; i <= 100; i++) {
    var placeholder = i;
  }
}






function deepEqual(a, b){
  if (a === b) { return true };
  else {
    return false
  }
}


var obj = {here: {is: "an"}, object: 2};
var obj2 = {here: {is: "or"}, object: 2};
console.log(deepEqual(obj, obj2));
