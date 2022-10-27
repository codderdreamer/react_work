"use strict";

// ES5

var helloES5_1 = function helloES5_1() {
  console.log('hello from ES5');
};
helloES5_1();

// ES5

function helloES5_2() {
  console.log('hello from ES5');
}
helloES5_2();

// ES6

var helloES6_1 = function helloES6_1() {
  console.log('hello from ES6');
};
helloES6_1();

// ES6

var helloES6_2 = function helloES6_2() {
  return console.log('hello from es6');
};

// ES5

var multiplyES5 = function multiplyES5(x, y) {
  return x * y;
};
console.log(multiplyES5(2, 3));

// ES6

var multiplyES6 = function multiplyES6(x, y) {
  return x * y;
};
console.log(multiplyES6(2, 3));
var multiplyES6_short = function multiplyES6_short(x, y) {
  return x * y;
};
console.log(multiplyES6_short(2, 5));

// ES5

var getProductES5 = function getProductES5(id, name) {
  return {
    id: id,
    name: name
  };
};
console.log(getProductES5(1, 'computer'));

// ES6

var getProductES6 = function getProductES6(id, name) {
  return {
    id: id,
    name: name
  };
};
console.log(getProductES6(1, 'phone'));

// ES5

var phones = [{
  name: 'IPhone 8',
  price: 4000
}, {
  name: 'IPhone X',
  price: 5000
}, {
  name: 'IPhone XR',
  price: 6000
}, {
  name: 'IPhone SE',
  price: 7000
}];
var priceES5 = phones.map(function (phone) {
  return phone.price;
});
console.log(priceES5);

// ES6

var priceES6 = phones.map(function (phone) {
  return phone.price;
});
console.log(priceES6);

// ES5
var filterES5 = phones.filter(function (phone) {
  return phone.price >= 5000;
});
console.log(filterES5);

// ES6
var filterES6 = phones.filter(function (phone) {
  return phone.price >= 5000;
});
console.log(filterES6);
