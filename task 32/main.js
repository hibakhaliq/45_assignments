let current_users = ["hiba", "hadia", "huda", "afiya"];
let new_users = ["hiba", "rayyan", "basim", "maryam"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
export {};
