let Guest_list : string[] = ["Hiba", "Huda", "Hania"];
for (let i=0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`);
}
console.log(`Unfortunately ${Guest_list[1]}, can't make it to dinner`);
Guest_list[1] = "Hadia";
console.log("\n NEW LIST OF INVITATION: \n");
for (let j=0; j < Guest_list.length; j++) {
    console.log(`Dear ${Guest_list[j]}: \n you are invited to dinner \n`);
}
