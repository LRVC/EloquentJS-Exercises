//exercise one
function minNum(one, two) {
  console.log(Math.min(one, two));
}
minNum(10, 100);

//exercise two
function checkEven(num){
  if (num === 0 || (num % 2 === 0)) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return checkEven(num - 2);
  }
}

//exercise three
function countB(string) {
  var numB = 0;
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) === "B") {
      numB++;
    }
  }
  return numB;
}

function countChar(string, letter) {
  var numB = 0;
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) === letter) {
      numB++;
    }
  }
  return numB;
}
