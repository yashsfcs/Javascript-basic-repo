var data = [
    1,
    "Uma",
    true,
    null,
    undefined,
    {name: 'Scott'},
    function(name){
       return name
    },
    ["red", "blue", "green"]
  ]

// access the function and pass the object name as parameter and print the name

console.log(data[6](data[5].name))

console.log(data[6](data[7][2]))