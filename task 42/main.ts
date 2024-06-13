let magicians: string[] = ["John", "Brad", "Dal"];

function make_great(magiciansArray: string []){
    for(let i=0 ; i< magiciansArray.length;i ++){
        magicians[i] = magicians[i] + `the  Great`
    }
}
function show_magicians(magicians: string[]){
    magicians.forEach(magicians => {
        console.log(magicians);
    })
}
make_great(magicians);
show_magicians(magicians);

