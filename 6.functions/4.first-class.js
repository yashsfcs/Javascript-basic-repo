function one(value){
    two() // 1. Invoking in another function
    value()
}

function two(){
    return function(){

    }
}

var three = function(){   // 2. Assigned to a variable

}

one(three) // 3.Passing function as a parameter to another function

// Function are objects

function greet(){
    console.log('Hello')
}

greet.fname = "Uma"

console.log(greet.fname)