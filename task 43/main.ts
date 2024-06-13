let magicians: string[] = ["John", "Brad", "Dal"];
function copyArray(arr: string[]){
    return[...arr]
}

function make_great(magiciansArray: string []){
    for(let i=0 ; i< magiciansArray.length;i ++){
        magiciansArray[i] = magiciansArray[i] + `the  Great`
    }
}
function show_magicians(magicians: string[]){
    magicians.forEach(magicians => {
        console.log(magicians);
    })
}
const copyMagiciansArray = copyArray(magicians)
make_great(copyMagiciansArray);
console.log(`\n This is my orignal array`);
show_magicians(magicians);

console.log(`\nThis is my modified  copy of the array`);
show_magicians(copyMagiciansArray);
