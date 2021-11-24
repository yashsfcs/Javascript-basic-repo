var person = new Object();

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
