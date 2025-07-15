//ARRAYS
const myArr = [0,1,2,3,4,5]

console.log(myArr[2]);

const myHeroes = ["shaktiman","batman"]

const myArr2 = new Array (1,5,6,7)
// ARRAY METHODS

myArr.push(6)
myArr.pop()//pop removes the last element
myArr.unshift(9)
myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// SLICE

console.log("a",myArr);
const my1 = myArr.slice(1,3)
console.log(my1)
console.log("b",myArr);




const marvel_heroes = ["thor","spiderman","ironman"]
const dc = ["superman","flash","batman"]
// marvel_heroes.push(dc);
// console.log(marvel_heroes);
const allheroes = marvel_heroes.concat(dc)
console.log(allheroes);


const allnewhero = [...marvel_heroes,...dc];
console.log(allnewhero)


console.log(Array.isArray("hitesh"))

