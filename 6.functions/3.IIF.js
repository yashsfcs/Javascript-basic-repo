(function(name, city){
    console.log(name, city)
})("Tuan", "Vietnam");


var display = (function(name, city){
                    return name + " " + city
               })("Scott", "Adam");

console.log(display);

/*
    ! (var isValid = 10 > 9) // Invalid
    * (alert('hi')) // Valid
    * (10 > 9) // valid
*/
