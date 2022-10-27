var nameVar = 'Sevda'
var nameVar = 'yücedağ'

console.log(nameVar)

let nameLet = 'Sevda'
nameLet = 'yücedağ'

console.log(nameLet)

const nameConst = "Sevda"
// nameConst = "yücedağ"

console.log(nameConst)

var age = 28

function getAge() {
    var age = 25
    console.log('function scope:',age)
}
getAge()

console.log(age)