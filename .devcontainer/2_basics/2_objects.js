//  sigleton literals se singleton nhi bnta constructors se banta h
// object literals

// Object.create (constructor)

const mysim = Symbol("key")

const Jsuser = {
    name: "hitesh",
    "full name": "hiten",//there is no chance for this to acces with dot so we acces this as string
    age: 18,
    [mysim]:"mykey1",

    location: "jaipur",
    email: "hit@gmail.com",
    lastlogindays:["monday","saturday"]
}

console.log(Jsuser.email) 
console.log(Jsuser["email"])//email ko string ki trah hi lena padega
console.log(Jsuser[mysim]) //by using this we are able to print mykey1 but the datatype for this is string o this is not used so we use[]to make it as symbol

Jsuser.eamil = "hitesh@gmail.com"  //to change the value
// Object.freeze(Jsuser) //THIS IS USED TO FREEZE THE OBJECTS,once the object is freeze the value of this is not changed.
// console.log(Jsuser) 


Jsuser.greetings = function(){
    console.log("hello users");
}
console.log(Jsuser.greetings());


//SINGLETON OR CONSTRUCTOR

// const instauser = new Object()//singleton object/////
const instauser = {}

instauser.id = "233646",
instauser.name = "hit"
// console.log(instauser)

const regularuser = {
    email:"kajalola@gmail.com",
    fullname: {
        firstname:"hiten",
    }
}
// console.log(regularuser.fullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3 = Object.assign({},obj1,obj2)//object.assign copy karta h objects ko 
const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id:1,
        email:"H@gmail.com"
    }
]
// console.log(instauser);
// console.log(Object.keys(instauser))
// console.log(Object.values(instauser))


//DSTRUCTURING//

const course = {
    coursename: "js",
    price: "9999",
    teacher: "hitrsh"
}
// course.courseinstructor

const{teacher} = course
console.log(teacher);

//const navbar = ({company})=> {                     DESTRUCTURING

// }
navbar(company = "hitesh")///

// {                                 APIs
//     name:"hitesh",
//     price:"free"
// }

// [                        array ki format me APIs
//     {}
//     {}
//     {}
// ]


