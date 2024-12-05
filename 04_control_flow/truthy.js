const x=''
if(x){
    console.log('empty string executed')
}

const arr=[]
// if(arr){
//     console.log('empty arr executed')
// }

// const obj={}
// if(obj){
//     console.log('empty obj executed')
// }

//falsy values ~ false,0,'',-0,BigInt i.e 0n, null, undefined,NaN
//truthy values ~ true,"0","false"," ",[],{},empty function ~ function(){}

//if we need to check if arr is empty or if the object is empty we do
// if(arr.length===0){
//     console.log('arr is empty')
// }
// if(Object.keys(obj).length===0){
//     console.log('obj is empty') //ass object.keys(obj)gives an empty arr and length of that arr ===0
// }

//------Nullish Coalescing operator[NCO] (??)~ prevents giving NULL/undefined to a variable
let y
y= 5?? 10 ??15
console.log(y)//value will be 5
y= null??undefined ??10
console.log(y) //value will be 10
y= null??undefined 
console.log(y) //value will be undefined

//-----------ternary operator( has nothing to do with NCO)
//Condition ? true :false

const p=100

p>=50 ? console.log('p is greater than 50'):console.log('p is smaller than 50')

