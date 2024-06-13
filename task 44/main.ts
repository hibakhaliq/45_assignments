function mySandwiches(...items: string[]){
    return `I want sandwich of ${items}`;
}
let collection1 = mySandwiches ("Cheese")
let collection2 = mySandwiches ( "Chicken")
let collection3 = mySandwiches ("Ham")

console.log(collection1);
console.log(collection2);
console.log(collection3);