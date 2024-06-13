let str1 = "Hiba";
let str2 = "Khaliq";
let num1 = 9;
let num2 = 10;
let Arr = [1,2,3,4,5];

//Test for equality and inequality with strings
console.log("Test for equality and inequality with strings:");
console.log(str1 === 'Hiba');
console.log(str1 === str2);

//Test using lower case function
console.log("\n Test using lower case function:");
console.log(str1.toLowerCase() === 'hiba');
console.log(str2.toLowerCase() !== 'khaliq');

//Numericals test
console.log("\n Numericals test:");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 9);
console.log(num2 !== 10);

//Test using "and" and "or" oprators
console.log("\nTest using and & or oprators:")
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 15));

//Test whether an item is in an array
console.log("\nTest whether an item is in an array: ");
console.log(Arr.includes(3));
console.log(Arr.includes(6));

//Test whether an item is not in an array
console.log("\n Test whether an item is not in an array: ");
console.log(Arr.includes(6));
console.log(Arr.includes(2));