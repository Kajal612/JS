const month  = 2

switch(month){
    case 1:
    console.log("january");
    break;
    case 2:
        console.log("feb");
        break;

        default:
            console.log("default")
            break;
}


//TRUTHY VALUES
const useremail = "hitesh@gmail.com"

if(useremail){
    console.log("got user email")
} else{
    console.log("don not have user email")
}


// falsy values== false,0,-0,bigint 0n,"",null,undefined,NAN
//truthy values=="0",'false'," ",[],{},function(){}

if (useremail.length === 0){
    console.log("array is empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

// terniary operator
// condition? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log
("more than 80")