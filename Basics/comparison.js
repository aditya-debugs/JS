// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2<=1);
// console.log(2>=1);
// console.log(2!=1);



console.log("2">1);
console.log("02">1);


console.log(null>0);
console.log(null==0);
console.log(null>=0);
// the above comparisons must be avoided, to follow neat code

/*Here ">,<,>=,<=" all are comparison
operators, so they convert null to 
number i.e., 0. While "==" is equality
check, it doesnt convert null to any number.
*/

//STRICT CHECK by "==="
//this checks value as well as data type, strictly checks
console.log("2"===2);