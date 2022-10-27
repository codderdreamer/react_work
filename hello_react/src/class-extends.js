class Person {
    constructor(name,age){
        this.name = name
        this.age = age
        console.log("Person");
    }

    getName(){
        console.log(this.name);
        return this.name;
    }

    getAge(){
        console.log(this.age);
        return this.age
    }
}

class Student extends Person {
    constructor(name,age,studentNumber){
        super(name,age);
        this.studentNumber = studentNumber
        console.log("Student");
    }

    getName(){
        let name = super.getName()
        name += " hello"
        console.log(name)
    }
}

const student1 = new Student("sevda",29,36456345)

console.log(student1);

student1.getName()