"use strict";

var nameVar = 'Sevda';
var nameVar = 'yücedağ';
console.log(nameVar);
var nameLet = 'Sevda';
nameLet = 'yücedağ';
console.log(nameLet);
var nameConst = "Sevda";
// nameConst = "yücedağ"

console.log(nameConst);
var age = 28;
function getAge() {
  var age = 25;
  console.log('function scope:', age);
}
getAge();
console.log(age);
