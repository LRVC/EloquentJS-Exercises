function checkEven(num){
  if (num === 0 || (num % 2 === 0)) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return checkEven(num - 2);
  }
}


//refactor
function checkEven(num){
  if (num === 0 || (num % 2 === 0)) return true;
  if (num === 1) return false;
  return checkEven(num - 2 );
}
