//there are 2 ways of declaring objects     1.literals 2.constructor
//when we create the object through class the object wich gets created is always a singleton object
//singleton object- classes which can be instantiated once (has only one object), and can be accessed globally
//whenever we create object through literals , the object created is not a singleton object

const obj1={
    name:"shreya",
    "full name": "shreya aswal",
    branch:"MCA",
    age:22
}; //by default keys are processed as strings
//console.log(obj1["full name"]); //way of accessing object values
//console.log(obj1.branch); 

//declaring a symbol
const sym= Symbol("key1") ; //sym is the symbol for key 1
//console.log(typeof sym);

//to access symbol as an object (syntax of symbol)
const obj2={
    name:"shreya",
    [sym]:"lock open",
    age:22
}; 
//console.log(obj2[sym]);
console.log(typeof obj2[sym]);

