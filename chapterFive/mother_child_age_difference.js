function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var mothers = {};
for (var event in byName){
  console.log(var pers = (byName[event]));
}
