let magicians = ["John", "Brad", "Dal"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = magiciansArray[i] + `the  Great`;
    }
}
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
const copyMagiciansArray = copyArray(magicians);
make_great(copyMagiciansArray);
console.log(`\n This is my orignal array`);
show_magicians(magicians);
console.log(`\nThis is my modified  copy of the array`);
show_magicians(copyMagiciansArray);
export {};
