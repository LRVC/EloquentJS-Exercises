function deepEqual(valOne, valTwo){
  if (valOne === valTwo){
    return true;
  }

  if (typeof valOne === 'object' || valTwo === 'object'{

      var numEventsOne = 0;
      var numEventsTwo = 0;

      for (event in valOne){
        numEventsOne += 1;
      }

      for (event in valTwo) {
        numEventsTwo += 1
        if (!(deepEqual(valOne[event], valTwo[event]))){
          return false;
        }
      }
    return numEventsOne === numEventsTwo;
    }
}









var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}
