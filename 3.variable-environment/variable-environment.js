function b(){
    x =3;
}

function a (){
    x =2;
   b()
}

var x = 1; //x becomes 1 from undefined
a()
console.log(x)

// // Hositing starts
// function b(){ // in memory
//     var x;  //x becomes undefined
// }

// function a (){ // in memeory
//     var x =2; // x becomes undefined 
//                // x becomes 2
//     b()
// }

// x = undefined
// x =1 