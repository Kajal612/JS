console.log("h")
console.log("i")
console.log("j")
console.log("k")
console.log("l")
console.log("m")
console.log("n")
console.log("o")


function sayname(){
console.log("h")
console.log("i")
console.log("j")
console.log("k")
console.log("l")
console.log("m")
console.log("n")
console.log("o")
}
// sayname

function addtwonumbers(num1,num2){ //(parameters)
    // console.log(num1+ num2)
}
addtwonumbers(2,4)

function addtwonumbers(num1,num2){ //(parameters)
    // console.log(num1+ num2)
}
// const result = addtwonumbers(2,4)
// console.log ("result:", result);//result is undefined



function loginusermsg(username){
    return`${username} just log in`
}

// console.log(loginusermsg("hitesh"))


function calculatecardprice(...num1){//.. this is a rest operator
    return num1
}


// console.log(calculatecardprice(2,3,4))
const user = {
    username: "hitesh",
    price: 20
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user)


const myarr = [2,89,67,56]
function returnsecondValue(getarray){
    return getarray[3]
}

console.log(returnsecondValue(myarr))


