const user = {
    name: 'sevdayucedag',
    email: 'info@sevdayucedag.com',
    city: 'Istanbul',
    roles: ['admin','custumer'],
    getRoles: function () {
        var that = this
        console.log(this.name);
        this.roles.forEach(
            function (role) {
                console.log(role);
                console.log(that.city);
            }
        )
    },
    getRolesES6: function () {
        var that = this
        console.log(this.name);
        this.roles.forEach(
             (role) => {
                console.log(role);
                console.log(this.city);
            }
        )
    }
}

user.getRoles()
user.getRolesES6()

// arrow func kendisine yeni bir scop oluşturmaz
// func yeni bir scop oluşturur

console.log("*****************************");

const addES5 = function () {
    console.log(arguments);
}

addES5(4,5,6)

const total = function () {
    let total = 0;
    for(let i=0;i<arguments.length;i++){
        total += arguments[i];
    }
    return total
}

console.log(total(3,4,5,6));

// bu şekilde arguments ES6'da kullanılmaz. arrow scope 
// oluşturmadığı için

// const totalES6 = () => {
//     console.log(arguments);
// }

