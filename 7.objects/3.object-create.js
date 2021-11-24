// var person1 = new Object();
// var perosn2 = {}
// var person3 = Object.create({})


// console.log(person1)
// console.log(perosn2)
// console.log(person3)

var person = Object.create({})


person["firstName"] ="Uma"
person["lastName"] ="Mahesh"

var city ="city"
person[city] ="Hyderabad"

console.log(person)

console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])

console.log(person.firstName)
console.log(person.lastName)
console.log(person.city)

person.state = "Telangana"

console.log(person.state)

person.address = new Object();

person.address.street = "1st main"
person.address.city = "Boston"

console.log(person.address.street)

console.log(person.address.city)
console.log(person["address"]["city"])


console.log(person)