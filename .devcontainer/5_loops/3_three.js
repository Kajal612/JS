//FOR OF LOOP

const arr = [1,2,3,4,5]
for(const value of arr){
    console.log(value)


}

const greetings = "hello world"
for (const greet of greetings){
    // console.log(`each char is ${greet}`);

}

//MAPS
const map = new Map()
map.set('IN',"india")
map.set('UK',"united kingdom")
map.set('FR',"france")

console.log(map);//map contains unique values

for (const key of map){
    // console.log(key);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spideman'
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }//MAPS ARE ITERATEABLE BUT 'FOR OF' LOOP WALA STRUCTURE OBJECT K LIYE KAMM NHI KARTA H


//OBJECT
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',

}
for(const key in myObject){
    console.log(myObject[key])
}//FOR IN LOP IS USED FOR OBJECTS OR AGAR HUM ARRAY ME FOR IN LOOP  LAGATE H TO VO OUTPUT ME KEY DETA H

//FOR EACH LOOP

const coding = ["ja","ruby","python","java"]

// coding.forEach(  function (item){
    // console.log(item);
// })

function printMe (item){
    // console.log(item);

}

// coding.forEach(printMe)


const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter((num) => num>4)
// console.log(newnums)
//agar scope open karte h to return likhna padega values print karwane liye

const newnums = []
mynums.forEach( (num) => {
    if (num>4){
        newnums.push(num)
    }
})
// console.log(newnums)


