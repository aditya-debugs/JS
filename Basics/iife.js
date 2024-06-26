// Immediately Invoked Function Expression (IIFE)

//1. So that it executes immediately 
//2. there is no pollution from global scoper variables

(function something(){
    console.log(`DataBase Connected`);
})();// this ";" is required to when you are writing multiple IIFE's


((name) => {
    console.log(`Database ${name} connected`);
})("Aditya")