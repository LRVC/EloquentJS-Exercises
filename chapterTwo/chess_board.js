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
