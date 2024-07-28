let mydate=new Date()
//console.log(mydate)
//console.log(mydate.toDateString()) // gives date is string
//console.log(mydate.toISOString()) //return date in ISO format
//console.log(mydate.toJSON())
//console.log(mydate.toLocaleDateString())
//console.log(mydate.toLocaleString('en-IN'))
let x=new Date(2024,1,28,0,24)
//console.log(x.toLocaleString())
let c=Date.now() 
console.log(c) //return the time value in milliseconds, of the curr date and time
console.log(x.getTime()) // return the time value in  milliseconds since midnight of 1jan 1970 of the date and time stored in x