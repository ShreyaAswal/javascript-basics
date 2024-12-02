//var does not define scope

let a=20
const b=30
if(true){
    let a=10
    const b=300
    //console.log(`inner a and b ${a} and ${b}`)
}
//console.log(`outer a and b ${a} and ${b}`)

//----interesting------
//there are 2 ways of declaring the function

console.log(addOne(2)) //gives no error
function addOne(num){
    return num+1
}
console.log(addOne(3)) //gives no error

//addTwo(3) //gives error ~ we cannot call the function before initialisation
const addTwo= function(num){ //this type of declaration of function is also called an expression
    return num+2
}
console.log(addTwo(4)) //gives no error

