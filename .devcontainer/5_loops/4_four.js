// const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.map( (num) => num+10)
// console.log(newnums);


// const newnums = mynums
                // .map( (num) => num*10)
                // .map( (num)=> num+1)
// console.log(newnums)

const mynums = [1,2,3]
const mytotal = mynums.reduce(function(acc,currval){
    return acc + currval
},0)
console.log(mytotal)