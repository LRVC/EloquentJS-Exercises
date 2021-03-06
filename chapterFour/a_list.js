function arrayToList(array){
  list = null;
  for (var i = array.length-1; i >= 0; i--){
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list){
  arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}


function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!(list)) {
    return undefined;
  }
  else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n-1);
  }
}
