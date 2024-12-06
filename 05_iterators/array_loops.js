//for of loop
const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num)
}// iterate over values of any iterator (array, string, map)

const mp=new Map //map constructor ,constructs a map which stores elements in {key,value} format //a key can only occur once
mp.set('js','javascript')
mp.set('java','java')
mp.set('cpp','c++')

for(const i of mp ){
    //console.log(i) //gives array of each element i.e a {key ,value}
}

for(const [key,val] of mp){
    //console.log(`key is ${key}, value is ${val}`)
}

//--- for of loop does not wor on object as object is not iterable

const obj={
    name:"shreya",
    age:"22"
}
for(const i of obj){
    //console.log(i) //gives error as obj is not iterable
}