function greet(message){
    return function(name){
        console.log(message, name)
    }
}

var wish = greet('Hello')
console.log(wish)
wish('Uma')