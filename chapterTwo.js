//exercise one
var hash = "";
for (var i = 0; i<=7; i++) {
  hash += "#";
  console.log(hash);
}

//exercise two
for (var i = 0; i<=100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//exercise three
function makeGrid(size) {
  var hashLine = " ";
  for (var rowCount = 0; rowCount <= size; rowCount++) {
      if (rowCount >= 0 && rowCount % 2 === 0) {
        hashLine += "\n";
      } else {
        hashLine += "\n ";
      }
    for (var lineCount = 0; lineCount <= size; lineCount++) {
        if (lineCount % 2 === 0) {
          hashLine += " ";
        } else {
          hashLine += "#";
        }
    }
  }
  console.log(hashLine)
}
makeGrid(8);
