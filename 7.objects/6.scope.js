var person = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    city: 'Hyderabad'
}
person.age= 39 // Add the property
person.firstName = "Jagrav" // Edit the property
delete person.city // Delete the property

//console.log(person)

/*  
  ? Object.preventExtensions()
  * We can edit and delete the existing properties 
  * But we can't add new properties
*/


var preventObject = {
    name: 'Scott',
    city: 'Boston',
    age: 44
}

Object.preventExtensions(preventObject)

preventObject.email = "scott@ef.com" // Add
preventObject.name ="Desatnick" // Edit
delete preventObject.age // Delete

console.log(preventObject)


/*  
  ? Object.seal()
  * We can edit the existing properties 
  * But we can't add new properties
  * and delete existing properties
*/


var sealObject = {
    name: 'Scott',
    city: 'Boston',
    age: 44
}

Object.seal(sealObject)

sealObject.email = "scott@ef.com" // Add
sealObject.name ="Desatnick" // Edit
delete sealObject.age // Delete

console.log(sealObject)

/*  
  ? Object.freeze()
  * We can't edit the existing properties 
  * and we can't add new properties
  * and we can't delete existing properties
*/


var freezeObject = {
    name: 'Scott',
    city: 'Boston',
    age: 44
}

Object.freeze(freezeObject)

freezeObject.email = "scott@ef.com" // Add
freezeObject.name ="Desatnick" // Edit
delete freezeObject.age // Delete

console.log(freezeObject)

var freezeSubObject = {
    name: 'Scott',
    city: 'Boston',
    age: 44,
    address: {
        state: 'Masechusets'
    }
}

Object.freeze(freezeSubObject)
Object.freeze(freezeSubObject.address)

freezeSubObject.address.state ="Washington DC"

console.log(freezeSubObject)

// freeze fails with Stringify and Parse back

// var value = JSON.stringify(freezeSubObject)

// console.log(value)

// var parse = JSON.parse(value)

// parse.address.state ="Washington DC"
// console.log(parse)