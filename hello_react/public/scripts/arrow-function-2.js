"use strict";

var user = {
  name: 'sevdayucedag',
  email: 'info@sevdayucedag.com',
  city: 'Istanbul',
  roles: ['admin', 'custumer'],
  getRoles: function getRoles() {
    var that = this;
    console.log(this.name);
    this.roles.forEach(function (role) {
      console.log(role);
      console.log(that.city);
    });
  },
  getRolesES6: function getRolesES6() {
    var _this = this;
    var that = this;
    console.log(this.name);
    this.roles.forEach(function (role) {
      console.log(role);
      console.log(_this.city);
    });
  }
};
user.getRoles();
user.getRolesES6();

// arrow func kendisine yeni bir scop oluşturmaz
// func yeni bir scop oluşturur

console.log("*****************************");
var addES5 = function addES5() {
  console.log(arguments);
};
addES5(4, 5, 6);
var total = function total() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};
console.log(total(3, 4, 5, 6));

// bu şekilde arguments ES6'da kullanılmaz. arrow scope 
// oluşturmadığı için

// const totalES6 = () => {
//     console.log(arguments);
// }
