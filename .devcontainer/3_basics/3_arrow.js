const user = {
    uesername: "hitesh",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username},welcome to website`);//this is used for current context
    }
}
// user.welcomeMessage()


function one(){
    // console.log(this)
}
one()



// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }



const addtwo = (num1,num2) => {
    return num1+num2
}
console.log(addtwo(3,4))