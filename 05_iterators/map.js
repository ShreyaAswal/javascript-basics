//------map function => it return each and every element of arr, but we can modify the element

const mynums=[1,2,3,4,5,6,7,8,9,10]
let arr1=mynums.map( (num)=> {
    return num+3
}) //Calls a defined callback function on each element of an array, and returns an array that contains the results.
//callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
//console.log(arr1)

arr1=mynums.map( (num)=> {
    if(num<=7)return num+3 //still return all the elements,(just the elements which does not match the condn are returning as undefined)
})
//console.log(arr1)

//-------chaining =>using more than one func altogehter

arr1=mynums.map( (val)=>val+2 )//first we add 2 in each element[3,4,5___,12]
           .map( (val)=>val*10)//then we multiply each element with 10
           .filter((val)=>val>=40)//then we filter only those elements which are greater than 40
//console.log(arr1); 

