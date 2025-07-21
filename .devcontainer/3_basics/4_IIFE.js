//IMMEDIETLY INVOKED FUNCTION EXPRESSIONS (IIFE)
//global scope k pollutions se bacahne k liye IIfe ka use karte h and ye function immedietly execute ho jata h

function Chai(){
    // console.log(`DB CONNECTED`);
}
// Chai()

// ()()  IIFE syntax

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')


