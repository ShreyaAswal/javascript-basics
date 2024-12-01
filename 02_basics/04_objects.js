//-----------object through Constructor
const obj= new Object(); //declare object through constructor
//console.log(obj);
obj.email="hello@gmail.com"
obj.name="shreya"

//-----objects inside objects
const obj2={
    mail:"s@gmail.com",
    name: {
        homename:{
            firstname:"tanu",
            lastname:"aswal"
        },
        officename:{
            firstname:"shreya",
            lastname:"aswal"
        }
    }
}
//console.log(obj2.name.homename.firstname)

//----------joining objects
const o1={ 1:"a" ,2:"b"}
const o2={1:"b", 3:"c"}
//const o3=Object.assign({},o1,o2) //assign(target, source) - all sources get assigned to target object
//console.log(o1,o2,o3); //o1 and o2 gets assign to a new empty target array o3
//const o3={...o1,...o2}; //by using spread operator
//console.log(o3);

//----objects inside array (way to send response to a webpage)
const arr=[
    {
        1:"a",2:"b"
    },
    {
        3:"c",4:"d"
    },
    {
        5:"e",6:"f"
    }
]
//console.log(arr[0]['1'])

//------object functions
//console.log(Object.keys(obj2)) //return arr of keys of the object 
//console.log(Object.values(obj2)) //return arr of values of the object
//console.log(Object.entries(obj2)) //return array of each attribute as an indivual array
//console.log(obj2.hasOwnProperty("name")) //return T/F whether the object has that property or not


