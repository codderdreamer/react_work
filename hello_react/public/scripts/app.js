"use strict";

// JSX - Javascript XML

var root = document.getElementById('root');

//_________________________________________________________________________________________________

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit amet."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var name = "Samsung 510";
var price = 5000;
var description = "iyi bir telefon";
//_________________________________________________________________________________________________

var product = {
  // name : "Samsung 510",
  price: 1000,
  description: "iyi",
  types: ['red', 'blue']
};
function formatPrice(p) {
  return p.price + 'TL';
}
function getDescription(description) {
  if (description) {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-desc"
    }, "description: ", description);
  } else {
    return 'no description';
  }
}
var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: ", product.name ? product.name : 'no name'), /*#__PURE__*/React.createElement("p", {
  id: "pruduct-price"
}, "price: ", product.price == 0 ? 'free' : product.price), product.price && product.price > 0 && /*#__PURE__*/React.createElement("p", null, "price: ", product.price, " TL"), getDescription(product.description), /*#__PURE__*/React.createElement("p", null, product.types.length > 0 ? 'there are options' : 'no options'));

//_________________________________________________________________________________________________

var number = 0;
var btnAddClassName = "btnGreen";
var btnMinusClassName = "btnRed";
function addOne() {
  number++;
  renderApp();
  console.log('add one');
}
function minusOne() {
  number--;
  renderApp();
  console.log('minus one');
}
var minusOneArrowFunc = function minusOneArrowFunc() {
  console.log('minus one arrow');
};
function renderApp() {
  var template3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number: ", number), /*#__PURE__*/React.createElement("button", {
    id: "btnPlusOne",
    className: btnAddClassName,
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    id: "btnMinusOne",
    className: btnMinusClassName,
    onClick: minusOne
  }, "-1"));
  ReactDOM.render(template3, root);
}

//_________________________________________________________________________________________________

function tick() {
  var element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "time is: ", new Date().toLocaleTimeString()));
  ReactDOM.render(element, root);
}
setInterval(function () {
  tick();
}, 1000);
