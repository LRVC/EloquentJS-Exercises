//not working
function arrayToList(array){
  list = null;
  for (var i = 0; i < array.length; i++){
    list = {value: array[i], rest: list};
  }
  return list;
}
