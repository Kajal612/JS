//IF

if(true){

}
if (false){  //agar condition falsse h to uske baad ka code execute nhi hoga

}
if (2 == "2"){
    console.log("executed");
}

const score = 300
if(score > 100){
    const power = "fly"
    // console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`); //ye line print karwana cahaenge to error aayega


const balance= 1000

// // if (balance > 500) console.log("test"),
// // console.log("test2");//immatureb code
// if(balance < 500) {
//     console.log("less than 500");
// } else if (balance < 900){
//     console.log("less than 900");
// } else if (balance < 1000){
//     console.log("less than 750");
// } else{
//     console.log("less than 1200");
// }                        

const userloggedin = true
const debitcard = true
if(userloggedin &&debitcard) {
    console.log("allow to buy course");
}