//var person = {} // Object Literal Syntax

// person["firstName"] ="Uma"
// person["lastName"] ="Mahesh"

// var city ="city"
// person[city] ="Hyderabad"

// console.log(person)

var person = {
    "firstName": "Uma",
    lastName: "Mahesh",
    address : {
        street: "abc",
        city: "XYZ",
        state: "ABC"
    }
}

console.log(person)

function greet(obj){
    console.log(obj.firstName, obj.lastName, obj.address.city, obj.address.state)
}

greet(person)

greet({firstName: 'Uma', 
       lastName: 'Mahesh', 
       address: {
            city: 'Hyd', 
            state: 'Telagana'
      }})


var ObjData = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    getFullName: function(){
        return this.firstName + ' ' + this.lastName
    }
}

console.log(ObjData.getFullName())