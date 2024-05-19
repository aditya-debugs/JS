// Memory : Stack and heap 
// Primitive (Stack)   & Non-primitive (Heap)

// Stack - In this type you get a copy, the original value does not change.

let myName= "Aditya"
let anotherName = myName
anotherName ="Anirudh"

console.log(myName);
console.log(anotherName);


// Heap - In this type, the reference is given to the original value itself.

let user1={
    email: "adi@gmail.com",
    id: 2
}

let user2= user1
user2.email="ani@gmail.com"

console.log(user1.email);
console.log(user2.email);