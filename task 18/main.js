"use strict";
let favouritePlaces = ["Makkah", "Hong kong", "New York", "London"];
console.log("orignal order" + favouritePlaces);
console.log("alphabatical order  " + [...favouritePlaces].sort());
console.log("orignal order  " + favouritePlaces);
console.log("Reverse the order of the list   " + [...favouritePlaces].sort().reverse());
console.log("Reverse the order of the list" + favouritePlaces.sort().reverse());
console.log("alphabetical order" + favouritePlaces.sort());
console.log("orignal order" + favouritePlaces.sort().reverse());
