function f1(){
    console.log('sh','re','ya')
    console.log('re')
    console.log('ya')
}

f1 //it will give reference of the function
//f1() //it calls the function

//-----function with parameters
//we dont have to give the datatype of parameters
function add(num1, num2){
    return num1+num2
}
const x=add(4,"a")
//console.log(x) //give 4a-treat no. as strings

const greet =function(str='tanu'){ //passing default value in parameter
    if(!str){
        console.log('please enter a name')
        return
    }
    console.log(`hello ${str}`)
}
//greet("shreya")
//greet()

//when we have multiple parameters(no. of parameters change everytime) then we use rest operator
//rest and spread oprator are same, we use diff names acc to the situation where operator is being used

function addtocart(val1,val2,...num){
    return num
}
//console.log(addtocart(100,222,333,4,98,5,3)) //return arr of all the values , take val1=first value , val2=second value, and rest all in array num

//--------objects as parameters

const user={
    name:"shreya",
    price:100000
}

function takingObj(anyObj){
    return `${anyObj.name}'s course price is ${anyObj.price}`
}
//console.log(takingObj(user)) //works fine
// console.log(takingObj(
//     {
//         name:"sam",
//         prices:990
//     }
// )) //object does not have prices, so it will print undefined in place of prices

//---------array as parameters

const arr=[100,200,300,600]

function takingArr(anyArr){
    return anyArr[1];
}
//console.log(takingArr(arr)); //works fine
// console.log(takingArr(
//     [100]
// )) //gives undefined

