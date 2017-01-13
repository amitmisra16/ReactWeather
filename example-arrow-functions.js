var names = ['Amit', 'Richa','Arav','Arin'];
/*
names.forEach(function(name){
  console.log("forEach", name);
});

names.forEach((name) => {
  console.log("arrowFunc", name);
});

names.forEach((name) => console.log(name));

var Person =  {
  name: 'Amit',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}

Person.greet();
*/

function add(a, b) {
  return a+b;
}
console.log(add(1,3));
console.log(add(9,0));


var addArrow = (a,b) => a+b;

console.log(addArrow(1,3));
console.log(addArrow(9,0));


var addStatement = (a, b) => {
  return a+b;
}

console.log(addStatement(1,3));
console.log(addStatement(9,0));
