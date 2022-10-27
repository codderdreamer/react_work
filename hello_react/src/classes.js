// Class - ES5

var Person = function () {
    
}

// Nesne - Object

const p = new Person();

console.log(p);

// Class - ES6

class Person2 {
    constructor(name,age){
        this.name = name
        this.age = age
        console.log("constructor")
    }

    calculateYear(){
        return new Date().getFullYear() - this.age;
    }

}

const p2 = new Person2("sevda",29);

console.log(p2);
console.log(p2.calculateYear())
