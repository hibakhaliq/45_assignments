let favouritePlaces : string[]= ["Makkah", "Hong kong", "New York","London"]
console.log("orignal order"+favouritePlaces)

// Print your array in alphabetical order without modifying the actual list.

console.log( "alphabatical order  "+[...favouritePlaces].sort());

// // • Show that your array is still in its original order by printing it.

console.log("orignal order  " + favouritePlaces);

// // • Print your array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse the order of the list   " +[... favouritePlaces].sort().reverse());

// // • Show that your array is still in its original order by printing it again.

console.log("Reverse the order of the list" + favouritePlaces.sort().reverse());

// // • Reverse the order of your list. Print the array to show that its order has changed.

console.log("alphabetical order" + favouritePlaces.sort())

// // • Reverse the order of your list again. Print the list to show it’s back to its original order

console.log("orignal order" + favouritePlaces.sort().reverse())




