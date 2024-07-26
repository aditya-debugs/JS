const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user Details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);

//new = constructor function
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
 
    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("Aditya", 15, false)
console.log(userOne.constructor);// just references to the function
console.log(userTwo);
//when you use new keyword-
//Step 1 - Empty object(), instance/new object gets created
//Step 2 - constructor function gets called
//Step 3 - All the arguments and all gets injected inside this
//Step 4 - all of them will get returned to us