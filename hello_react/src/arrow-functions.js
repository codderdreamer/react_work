// ES5

var helloES5_1 = function () {
    console.log('hello from ES5');
}

helloES5_1()

// ES5

function helloES5_2() {
    console.log('hello from ES5');
}

helloES5_2()

// ES6

let helloES6_1 = () => {
    console.log('hello from ES6')
}

helloES6_1()

// ES6

let helloES6_2 = () => console.log('hello from es6');

// ES5

let multiplyES5 = function (x,y) {
    return x * y;
}
console.log(multiplyES5(2,3));

// ES6

let multiplyES6 = (x,y) => {
    return x * y;
}

console.log(multiplyES6(2,3));

let multiplyES6_short = (x,y) => x*y

console.log(multiplyES6_short(2,5));

// ES5

let getProductES5 = function (id,name) {
    return {
        id: id,
        name: name
    }
}

console.log(getProductES5(1,'computer'));

// ES6

let getProductES6 = (id,name) => ({id:id,name:name})
console.log(getProductES6(1,'phone'));

// ES5

const phones = [
    {name: 'IPhone 8', price: 4000},
    {name: 'IPhone X', price: 5000},
    {name: 'IPhone XR', price: 6000},
    {name: 'IPhone SE', price: 7000}
]

let priceES5 = phones.map(function (phone) {
    return phone.price;
})

console.log(priceES5)

// ES6

let priceES6 = phones.map(phone => phone.price)
console.log(priceES6);

// ES5
let filterES5 = phones.filter(function (phone) {
    return phone.price >= 5000;
})

console.log(filterES5);

// ES6
let filterES6 = phones.filter(phone => phone.price >= 5000)

console.log(filterES6);