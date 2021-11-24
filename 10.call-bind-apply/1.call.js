var person1 = {firstName: 'Scott', lastName: 'Desatnick'}

var person2 = {firstName: 'Jagrav', lastName: 'Meka'}

function getName(message, city){
        return message + ' ' + 
               this.firstName + ' ' + 
               this.lastName + ' to ' + 
               city
}

var fullName = getName.bind(person2)('Welcome', 'Hyderabad')

console.log(fullName)

var data1 = getName.call(person1, 'Welcome', 'Boston')
console.log(data1)

var data2 = getName.apply(person1, ['Welcome', 'Sydney'])
console.log(data2)
