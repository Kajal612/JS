const name = "kajal"
const repocount = 6

// console.log(name + repocount);//not widely used in todays time instead+we use ``

// console.log(`hello my name is ${name} and my repocount is ${repocount} `);

const gamename = new String('hitesh-sh');
// console.log(gamename);
// console.log(gamename[0]);
// console.log(gamename.__proto__);//it gives object 
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt('2'));

const newstring = gamename.substring(0,4);//last value is not included in the output and subsring ignores negative values
console.log(newstring);

// const anotherstring = gamename.slice(-6,4);
// console.log(anotherstring)

const newstring1 = "  hitresh  "
console.log(newstring1)
console.log(newstring1.trim());//trim removes starting space and ending space

const url = "https://hitesh.com/aman%20ola"
console.log(url.replace('%20' , '_'))

console.log(url.includes('hitesh'));

console.log(gamename.split('-'))