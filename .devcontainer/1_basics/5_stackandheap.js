// stack (primitive) heap(non premitive)

let myYoutubename = "games"
let anothername = myYoutubename
anothername = "football"
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "kajalola.com",
    upi: "user@ybl",
}

let usertwo = userOne
usertwo.email = "aman.com"
console.log(userOne.email);
console.log(usertwo.email);
