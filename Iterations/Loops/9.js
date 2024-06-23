const myNumbers= [1,2,3]

// const myTotal = myNumbers.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc +currval
// }, 0 )

const myTotal = myNumbers.reduce( (acc, curr) => acc+ curr,0)

console.log(myTotal);


const shoppingCart = [
    {
        item: "js",
        price: 2999
    },
    {
        item: "python",
        price: 3999
    },
    {
        item: "mobile dev",
        price: 999
    },
    {
        item: "DS",
        price: 5999
    },
    
]

//const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0)
//console.log(priceToPay);

//My method
let TotalPrice= 0;

//shoppingCart.forEach( (item) => {return TotalPrice+=item.price} )
//console.log(TotalPrice);

// for (const item of shoppingCart) {
//     TotalPrice+=item.price
// }
//console.log(TotalPrice);

for (const index in shoppingCart) {
    TotalPrice+=shoppingCart[index].price;
}
console.log(TotalPrice);