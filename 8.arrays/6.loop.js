var items1 = ["chair", "bench", "pad", "jug"]

console.log(items1)
console.log(items1.length)

// for method

for(var i=0; i < items1.length; i++){
    console.log(items1[i], i)
}

// forEach Method
console.log('*********forEach******')
var items2 = items1.forEach(function(value, index){
    console.log(value, index)
    return value + ' ' + index
})

// Map Method
console.log('*********Map******')
var items3 = items1.map(function(value, index){
    console.log(value, index)
    return value + ' ' + index
})

// for in

for(var item in items1){
    console.log(item)
}

// for of 
for(var item of items1){
    console.log(item)
}

// for(var [key,value] of items1){
//     console.log(key)
// }


console.log(items2)
console.log(items3)