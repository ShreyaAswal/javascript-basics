const obj={name:"shreya",age:22,course:"mca"}

//----for in loop --iterate on indexes/keys 

for (const idx in obj) {
    //console.log(idx) //gives keys of obj
    //console.log(`value is`,obj[idx])//values of those keys
}

const arr=['shreya','tanu','yashita','anita']

for(const i in arr){
    ///console.log(i) //gives keys{which in this case is idx}
   // console.log(`value at index ${i} is ${arr[i]}`)
}

const mp=new Map

mp.set('IN','INDIA')
mp.set('FR','FRANCE')
mp.set('UK','UNITED KINGDOM')
mp.set('GER','GERMANY')
mp.set('NY','NEW YORK')

for( const i in mp){
    console.log(i)//does not give any value as [for in] iterates over enumerable properties of an object. 
                  //The keys in a map are not enumerable properties
}
