

let car: string = 'subaru'
console.log("\n ------> 5 tests evaluate to true:")
//Test 1
console.log("Is car != 'toyota?' I predict true")
console.log(car === 'subaru')

//Test 2
console.log("Is car != 'toyota?' I predict true");
console.log(car === 'subaru');

//Test 3
console.log("Is the lenght of the car > 4? I predict true");
console.log(car.length > 4);

//Test 4
console.log("Is the length of the car <=6? I predict true");
console.log(car.length <=6);

//Test 5
console.log("Does car starts with 's'? I predict true");
console.log(car.startsWith('s'))

console.log("\n ------> 5 tests evaluate to false:")

//Test 1
console.log("Is car != 'honda?' I predict false")
console.log(car === 'honda')

//Test 2
console.log("Is car in uppercase? I predict false")
console.log(car.toUpperCase()=== car)

//Test 3
console.log("Is car 'Subaru'? I predict false");
console.log(car === 'Subaru');

//Test 4
console.log("Is car === 'Audi'? I predict false");
console.log(car === 'Audi');

//Test 5
console.log("Is the length of the car === 7> I predict false");
console.log(car.length === 7);