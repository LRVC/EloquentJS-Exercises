function every(array, action) {
  for (var i = 0; i < array.lenth; i++){
    if(!action(array[i])){
      return false;
    } else {
      return true;
    }
  }
}

function some(array, action) {
  for (var i = 0; i < array.length; i++) {
    if(action(array[i])){
      return true;
    } else {
      return false;
    }
  }
}
