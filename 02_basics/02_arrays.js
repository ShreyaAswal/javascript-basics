const arr1=[1,2,3,4,5];
const arr2=["marvel", "dc", "disney", "hbo"];
const arr3=["deshaw", "visa", "kla", "adobe"];
//arr1.push(arr2) // it pushes the arr2 as an element in arr1
const arr4=arr1.concat(arr2,arr3); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//console.log(arr1,arr4);

//diff b/w spread operator and concat function is that, spread iterate over the string/array (not object) and then put it into the array

const obj={name:"shreya",
    class:"mca"
}
//const arr5=[...arr1,...arr2,...obj]; //spread operator
//console.log(arr5); gives error

const arr5 =[...arr1,...arr2]
const arr6=[1,2,3,[4,5,6],[7,8,[9,10,[11,12]]],13,14];

const arr7=arr6.flat(Infinity) //Returns a new array with flattening its depth upto given number (give infinity, if want to flat whole arr)
//console.log(arr7);

//console.log(Array.isArray("shreya")); //return whether the arg is arr or not
//console.log(Array.from("shreya")); //Creates an array from an iterable object.

let x=100;
let y=101;
let z=102;
//console.log(Array.of(x,y,z));//Returns a new array from a set of elements.
