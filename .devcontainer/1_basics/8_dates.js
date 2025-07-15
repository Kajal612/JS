// DATES

let myDate =  new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(typeof myDate);
let myCreateDate = new Date ("01-01-2025")
console.log(myCreateDate);
let myTimestamp = Date.now()

console.log(myTimestamp);
console.log(Date.now()/1000);  ///1000 is used to covert milisecond into seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
})



