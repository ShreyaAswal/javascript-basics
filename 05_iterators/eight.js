//reduce method->used to accumukate the sum of an array
//A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
const nums=[1,2,3]

const initialvalue=2
let val=nums.reduce( (acc,val) => {
    //console.log(`${acc} and ${val}`)
    return acc*val 
},initialvalue)
//console.log(val) //it print 12

//callbackfn: (previousValue(new arg added): number, currentValue : number, currentIndex: number, array: number[]) => number

val=nums.reduce( (acc,val) => acc+val,0)
//console.log(val)//it gives 6\

const shoppingCart=[
    {item:'shoes',price:3000},
    {item:'shoes',price:1000},
    {item:'shoes',price:5000},
    {item:'shoes',price:2000}
]

val=shoppingCart.reduce( (acc,item) => acc + item.price  ,0)
console.log(val)