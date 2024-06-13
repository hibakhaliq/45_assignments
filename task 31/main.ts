
let usernames = ['admin','Hadia','Huda','Afiya','Rayyan'];
 usernames = []
if (usernames.length === 0) {
    console.log("Your array  s empty, we need to find more users")
}
usernames.forEach (oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser} would you like to see the status report?`)
    }
    else {
        console.log(`Hello ${oneUser}. thanks for logging in again`)
    }
}

)