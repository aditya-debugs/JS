//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


//This is called as normal function declaration
//Here it will work 
console.log(addone(5))

function addone(num){
    return num + 1
}


// In this way it wont run as you have called the func before declaring it .
// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }

//this is expression function declaration
const addTwo = function(num){
    return num + 2
}
addTwo(5)