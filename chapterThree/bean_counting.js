function countB(string) {
  var numB = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      numB++;
    }
  }
  return numB;
}

function countChar(string, letter) {
  var numChar = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      numChar++;
    }
  }
  return numChar;
}
