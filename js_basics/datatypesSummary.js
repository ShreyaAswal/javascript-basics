//primitive
//  7 types
//String, Number, Object, Boolean, undefined, null,Symbol
const id=Symbol("123")
const id2=Symbol("123")
//console.table([id, id2])
//console.log(id===id2) //false
let bigNum=45624578912344585782834n
//console.log(typeof bigNum) //bigint
//console.log(typeof x) //undefined (x is not declared anywhere)

let myFunc= function(){
    console.log("hello")
}

let myObj={
    name:"shreya",
    age:22
}
//console.log(typeof myFunc) //function 
//console.log(typeof myObj) //object

let myArr=["abc","def","ghi"]
console.log(typeof myArr) //object

//*******************Memory******************/
//stack(primitive types) and heap(non primitive types)
let x=2
let y=x
y=5
console.table([x,y]) // x=2 and y=5
let obj1={
    name:"shreya",
    age:22
}
let obj2=obj1
obj2.name="Tanu"
console.table([obj1.name,obj2.name]) //both Tanu