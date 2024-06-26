//when objects are declared from literals, singleton nahi hota
//when objects are declared from constructore singleton hota hai
//object.create- constructor method

//Object Literals

const mySym= Symbol("key1")
const JsUser= {
    name:  "Aditya",
    age:18,
    "full name": "Aditya Agrahari",
    [mySym]: "mykey1",
    location: "Kalyan",
    email: "xyzgmail.com",
    issLoggedIn: false,
    lastActiveDays:["Monday","Wednesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);//to access such keys
// console.log(JsUser.mySym);
//this will refer mySym as string and not as a symbol
// console.log(JsUser[mySym]);

//to edit values in object 
// JsUser.email = "aditya@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "adi@gmail.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello Js User");
// }
// // console.log(JsUser.greeting());
// JsUser.greeting2 = function(){
//     console.log(`Hello Js User ${this.name}`);
// }
// console.log(JsUser.greeting2());


//Object through constructor 

// const instaUser = new Object() //singleton object
const instaUser = {} // non singleton object

instaUser.id= "123yzx"
instaUser.name = "Sam"
instaUser.issLoggedIn = false

//console.log(instaUser);

const regularUser = {
    email: "xyz@gmail.com",
    fullname : {
            userfullname: {
                firstname: "Aditya",
                lastname: "Agrahari"
            }
    }
}

//console.log(regularUser.fullname);
//or you can narrow it down more
//console.log(regularUser.fullname.userfullname.firstname);

//to merge values of two objects

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
const users = [
    {
        id: 1,
        email: "xyz@gmail.com"
    },
    {
        id: 1,
        email: "xyz@gmail.com"
    },
    {
        id: 1,
        email: "xyz@gmail.com"
    },   
]
users[1].email
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('issLoggedIn'));


 //De-structuring
const course= {
    name: "JS",
    price:"999",
    instructor: "Aditya",
}
//console.log(course.instructor);

const {instructor}=course
console.log(instructor);

//API
