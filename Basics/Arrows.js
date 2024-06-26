const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome  to our website`);
        console.log(this);// this refers to current context
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//this gives empty output because there is no global context in the node environment
//but if you run this in browser(inspect) it'll run

// function something(){
//     console.log(this);
// }
// something()
//this will give you a lot of values

// function something(){
//     let username =  "Aditya"
//     console.log(this.username);
// }
// something()
// we cannot use this in functions, like we can in objects

// const something = function(){
//     let username =  "Aditya"
//     console.log(this.username);
// }
// something()
// we cannot use this in functions, like we can in objects

// const something = () =>{
//     let username = "aditya"
//     console.log(this);
// }
// something()
//{} - output 

// const addTwo  = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo  = (num1, num2) =>  (num1 + num2) // implicit return. Also used in REACT

const addTwo  = (num1, num2) =>  ({username: "Aditya"}) //  returning an object

console.log(addTwo(3,4));

const myArray = [1,2,3,4,5,6]


