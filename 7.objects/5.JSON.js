var jsObj ={
    fullName: "uma",
    city: "hyd"
}

var JSOnObj = {
	"fullName": "uma",
	"city": "hyd"
}

var person = {firstName: "Swathi", lastName: "Jagrav"}

var jsonStringify = JSON.stringify(person)

console.log(person, typeof person)
console.log(jsonStringify, typeof jsonStringify)

var jsonParser = JSON.parse(jsonStringify)

console.log(jsonParser, typeof jsonParser)