
console.log(a)
var a = 10;
console.log(a)

console.log(sample())

function sample(){
    return 'hello'
}

// Hoisting 

a = undefined
function sample(){
    return 'hello'
}
console.log(a)
var a =10;
var a;

