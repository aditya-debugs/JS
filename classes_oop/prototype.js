// let myName = "Aditya    "
// let something = "tea     "


// console.log(myName.truelength);

let myHeros= ["thor", "ironMan", "spidey"]

let heroPower = {
    thor: "thunder",
    ironMan: "suit",
    spidey: "sling",

    getSpiderPower: function(){
        console.log( `Spidey power is ${this.spidey}`);
    }
}
Object.prototype.aditya = function(){
    console.log(`Aditya is present in all objects`);
}

Array.prototype.hello = function(){
    console.log(`hello sir!`);
}

// heroPower.aditya();
// myHeros.aditya();
// myHeros.hello();
// heroPower.hello();  Array ka function object access nahi kar pata 


const User = {
    name: "aditya",
    email: "xyz.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "Aditya      "

String.prototype.truelenth = function(){
    console.log(`${this}`);
    console.log(`True length of the string is ${this.trim().length}`);
}
anotherUsername.truelenth();
"hello  ".truelenth();