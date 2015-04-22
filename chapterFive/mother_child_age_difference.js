function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


var mothers = [];
var children = [];
for (var event in byName){
  if (event != null){
    mothers.push(byName[event].mother);
  	children.push(byName[event].name);
  }
};
