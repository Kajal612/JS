 
//  var c = 300,
// let a  = 300


 if(true){ //if k andar pura hb block scope and if k uper jo h vo h global scope.
// const b = 5
// var c = 67
// console.log("INNER:",a)
 } // scope



// console.log(a);
// console.log(b);
// console.log(a);


function one(){    //nested functins me parent function child ko access kar pata h but chile function parent function ko nhi
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    //  console.log(website);

     two()


}
one()


if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        console.log(username+ website);
    }
}
console.log(username)//ye print nhi hoga



// INTERSTING CONCEPT
console.log(addone(5))
function addone(num){    //yahan pe add one function se bahar le jane se value print ho jayegi
    return num+1
}


const addtwo = function(num){ //yahan pe upper wale case jAISE nhi hoga kyuki humne upper sirf declare kiya tha or isme numtwo ko ek variABLE ME HOLD BHI KAR Diya h
    return num+2
}

console.log(addtwo(6))



