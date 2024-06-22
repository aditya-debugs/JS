// for of 

//["", "", ""]
//[{}, {}, {}]

const arr= [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet===" "){
        //console.log("empty space");
        continue;
    }
    //console.log(`Each char is ${greet}`);
    
}

//Map
// just like objects but, it takes only unique values, and also remembers the order 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")
// console.log(map);

for (const [key, value] of map) {
   // console.log(key, ':-', value);
}
//for not printing as array, Destructuring of array
//Or print as an array
for (const key of map) {
    //console.log(key);
}


//trying for-of loop on an object

const myObject ={
    game1: "NFS",
    game2: "GTA"
}

for (const [key, value] of myObject) {
     console.log(key, ':-', value);
 }
 //objects are not iteratable in this way. 