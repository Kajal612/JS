//FOR

for(let index = 0;index <10; index++){
    const element = index;
    console.log(element);
}
for (let i=0; i <=10;i++) {
    console.log(`outer loop value:${i}`);
    for(let j = 0;j<= 10; j++){
    //     console.log(`inner loop value${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
    }
    
}

let myarray = ["flash", "batman", "superman"]
// console.log(myarray.length);
for (let index = 0;index < myarray.length;index++){
    const element = myarray[index];
    // console.log(element);
}


//BREAK AND CONTINUE 


for (let index = 1;index <= 20;index++){
    if (index == 5){
        // console.log(`detected 5`)
        break  //kisi bhi control flow ko break karna ho to hum break likhte h
    }
    //  console.log(`value of i is ${index}`);
}



for (let index = 1;index <= 20;index++){
    if (index == 5){
        console.log(`detected 5`)
        continue
    }
     console.log(`value of i is ${index}`);
}