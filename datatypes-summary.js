//Primitive datatype

// 7 categories : String, Number, Boolean, null, undefined, symbol, BigInt


const score = 100 // In javascript we dont have to  define the data type

"const score:number= 100" // In typrescript

const scoreValue= 100.3

const isLoggedIn = false

let userEmail;

const id= Symbol('123');
const anotherid= Symbol('123'); 

const bigNumber= 324234234234n



// Reference (non primitive)

//array, Object, Functions

const heros =["ironman", "cap", "falcon"]
let obj={
    name: "Adi",
    age: 22,
}

const myFunction = function(){
        console.log("Hello world ");
}

//can use "typeof" to find data type
// or refer ecma script

console.log(typeof myFunction);