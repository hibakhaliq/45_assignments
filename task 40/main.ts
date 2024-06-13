function my_album(artistName : string, albumTitle : string){
    return {artistName,albumTitle}
}
let album1 = my_album("Taylor swift", "Reputation");
let album2 = my_album("Olivia Rodrigo", "Brutal");
let album3 = my_album("Harry Styles","Fine Line");

console.log(album1);
console.log(album2);
console.log(album3);

//Number of tracks
function my_album2(artistName: string, albumTitle: string, numberOfTracks: number){
    return{artistName,albumTitle,numberOfTracks}
}
let album4 = my_album2("Taylor Swift","Lover",30);
let album5 = my_album2("Olivia Rodrigo", "Sour", 40);
let album6 = my_album2("Harry Styles", "Midnight", 34);

console.log(album4);
console.log(album5);
console.log(album6);