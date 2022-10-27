"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// Class - ES5

var Person = function Person() {};

// Nesne - Object

var p = new Person();
console.log(p);

// Class - ES6
var Person2 = /*#__PURE__*/function () {
  function Person2(name, age) {
    _classCallCheck(this, Person2);
    this.name = name;
    this.age = age;
    console.log("constructor");
  }
  _createClass(Person2, [{
    key: "calculateYear",
    value: function calculateYear() {
      return new Date().getFullYear() - this.age;
    }
  }]);
  return Person2;
}();
var p2 = new Person2("sevda", 29);
console.log(p2);
console.log(p2.calculateYear());
