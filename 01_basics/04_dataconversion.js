let score=33
//console.log(typeof score) //number 
let s="33abc"
let y=Number(s);
console.log(typeof y) //number
console.log(y)        //NAN
let n=null
n=String(n);
console.log(typeof n) //string
console.log(n) //null

//----------operations-----------

// console.log(2+2) //addition
// console.log(3-2) //subtraction
// console.log(4*2) //multiplication
// console.log(3**5)  //power
// console.log(3/5)   //division
// console.log(3%5)    //mod

let r="abc"
let t="def"
console.log(s+t) //concatanate
console.log("1"+2) // 12 //string precedence is greater than number
console.log(1+3+"2") //42
console.log("3"+2+2) //322
console.log(+true) //1
//console.log(true+) //error
console.log(+"") //0 length