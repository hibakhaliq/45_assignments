let Guest_list : string[] = ["Hiba", "Huda", "Hania"];
console.log("Good news! We have found a new bigger dinner table, so more space is availablr. So, our new guest list is: \n")
Guest_list.unshift("Afiya")
Guest_list.splice(2,0, "Ayesha")
Guest_list.push("Marium")
for (let i=0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`);}
    
    console.log(`Unfortunately, dinner table won't arrive in time so we can only invite two people for dinner. \n`)

while(Guest_list.length >2){
    let notInvited = Guest_list.pop()
    console.log(`Sorry we can't invite you to dinner due to limited space Ms ${notInvited} \n`) ;}


    
    {

    
        for (let i=0;i < Guest_list.length; i++)
            console.log(`Dear ${Guest_list[i]} : \n you are still invited to dinner \n`);
    }
    Guest_list.pop()
    Guest_list.pop()
    console.log(Guest_list);
