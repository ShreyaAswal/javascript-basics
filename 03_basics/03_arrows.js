//this keyword is used to refer to the current context

const obj={
    name:"shreya",
    class:"MCA",
    price:999,
    greet:function(){
        console.log(`hello, ${this.name}`) //we are referring to the current context,of the object thus uses 'this'
        console.log(this) 
    }
}

//obj.greet()
obj.name="tanu"
//obj.greet() //now context of obj got changed , name got changed

//console.log(this) //in node~ we see an empty object, as there is no global object as it is a standalone engine for js
                  //but in browser ~ we see 'window' as the global object, as we are using it functions like click, hover etc, thus window is the most global object

//------this inside the function

function func(){
    let name="shreya"
    console.log(this.name)// this doesnt work inside functions
    console.log(this) //gets a lot of function //setinterval,settimeout etc
}
//func()

//------arrow function---
//diff between arrow func and normal func is that- in arrow func, this keyword gives empty object unlike normal func

const addnum= (num1,num2) => {
    console.log('i am arrow func')
    return num1+num2
} //explicit return arrow func


//implicit return
const subnum= (num1,num2) => num1-num2 
//or we can also write return variables using brackets (used mainly when we have to return object)
const mulnum= (num1,num2) => (num1*num2)

const returnObj= () => ({name:"shreya", age:22})


console.log(addnum(3,4))
console.log(subnum(7,4))
console.log(mulnum(3,4))
console.log(returnObj())
