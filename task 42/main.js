let magicians = ["John", "Brad", "Dal"];
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magicians[i] = magicians[i] + `the  Great`;
    }
}
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
make_great(magicians);
show_magicians(magicians);
export {};
