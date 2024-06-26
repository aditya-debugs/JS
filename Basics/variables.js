const accountId= 123456
let accountEmail="adi@gmail.com"
var accountPass="123"
var accountCity= "Mumbai"
let accountState;

//accountId= 2 // Cannot change a const variable

accountEmail="andy@gmail.com"
accountPass="adi1641"
accountCity= "Kanpur"
/*
prefer not to use var because of 
issue in block scope and functional scope
(Iska meaning baadme samjhega)
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])