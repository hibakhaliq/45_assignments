let Guest_list : string[] = ["Hiba", "Huda", "Hania"];
console.log("\n NEW LIST OF INVITATION: \n");
for (let j=0; j < Guest_list.length; j++) {
    console.log(`Dear ${Guest_list[j]} : \n you are invited to dinner! \n`);
}
console.log("Good news! We have found a new bigger dinner table, so more space is availablr. So, our new guest list is: \n")
Guest_list.unshift("Afiya")
Guest_list.splice(2,0, "Ayesha")
Guest_list.push("Marium")
for (let i=0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`);}
