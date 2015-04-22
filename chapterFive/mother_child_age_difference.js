function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


var ageDiff = [];
function ageDifference(array){
  for (var i = 0; i < array.length; i++){
    if (byName[ancestry[i].mother] !== undefined) {
	  ageDiff.push(Math.round((ancestry[i].born) - (byName[ancestry[i].mother].born)));
    }
  }
  return ageDiff;
}

console.log(average(ageDifference(ancestry)));
//for (var name in byName) {
	//console.log(byName[name]);
//}
