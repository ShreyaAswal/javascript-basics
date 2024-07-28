let arr=[1,100, true,"shreya",8,9,"hello"] // can have any type of values
//console.log(arr)

//******Array methods***********//
arr.push(10);
//console.log(arr) //push 10
arr.pop()
//console.log(arr) //pop last element ie 10
arr.unshift(5)
//console.log(arr) // push 5 at start
arr.shift();
//console.log(arr)  //pop from first element

console.log(arr.slice(1,3))  //slice arr(first idx, last idx-1) and does not change the orig array
console.log(arr)
console.log(arr.splice(0,3)) // splice arr(first idx, last idx) and cut this portion from real array
console.log(arr)

