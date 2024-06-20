//ARRAY 
const arr= [1,2,3,4,5,6,7]
const arr1 = new Array(1,2,3,4,5,6,7)
const arr2 = ["aditya", "Anirudh", "Kavita"]
// console.log(arr[3]);
// console.log(arr1[3]);
// console.log(arr2[0]);

// arr.push(8)
// arr.push(9)
// arr.pop()
// arr.unshift(9)
// console.log(arr);

// console.log(arr.includes(10));
// console.log(arr.indexOf(5));

// Slice and Splice 
 
// console.log('A', arr);
const myarr1= arr.slice(1,3)
// console.log(myarr1);
// console.log('B',arr );


const myarr2= arr.splice(1,3)
// console.log(myarr2);
// console.log('C',arr );


//Splice also removes the data from the original array, while slice does not!

const names_1 = ['Aditya', 'Anirudh', 'Omprakash', 'Kavita']
const names_2= ['raju', 'ram', 'Laxman']
 
// names_1.push(names_2);
// console.log(names_1);

// "PUSH" method merges the arrays not the elements in the arrays!
// Instead use Concat method

// const names_3= names_1.concat(names_2)
// console.log(names_3)
//Below is a more efficient way to concatenating two arrays- Spreading

// const names_3= [...names_1, ...names_2]
// console.log(names_3);

// const array =[1,2,3,[4,5,6,],7,[8,9,[10,11]]]
// const another_array= array.flat(Infinity)
// console.log(another_array);

console.log(Array.isArray("Anirudh"))
console.log(Array.from("Anirudh"))
console.log(Array.from({name:"Anirudh"})) //important
//returns an empty array because you have to specify of what should
//be the array made of i.e., keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
