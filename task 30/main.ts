let usernames = ['admin','Hadia','Huda','Afiya','Rayyan'];
 
for (let i = 0; i < usernames.length; i ++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see the status report?")
    }
    else {
        console.log(`Hello ${usernames[i]}, thankyou for logging in again.`)
    }

}