//for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element)
    //loop inside loop
    for (let j = 0; j < 2; j++) {
        //console.log(`values are ${i},${j}`);  
    }
}

const arr=['shreya','himanshu','priyanshu','tanu','ashok','asha']

//for(let i=0;i<arr.length;i++)console.log(`${arr[i]} is best`)

//-----break and continue

for (let i = 0; i < arr.length; i++) {
    if(i==2)continue; //skip this iteration
    if(i==4)break; //break the loop
    //console.log(`${arr[i]} is best`)
}