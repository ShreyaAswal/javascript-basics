//for each loop
const coding=['nfs','gow','pubg','tekken']

//for each loop is a high order funtion, high order function is nothing but a function which take another func to do some computation

//3 ways
coding.forEach( function(val){ //1
   // console.log(val);
}) //ForEach calls the callbackfn function one time for each element in the array.Performs the specified action for each element in an array.

coding.forEach( (val,idx,arr)=>{ //2
    //console.log(val,idx,arr,typeof val,typeof idx,typeof arr)
})//callbackfn{func which is called inside foreach func is called callback func}=> arguments(value:type- string, index:type- number, array:type-object)


function print(val){ //3
    //console.log(val);
}
coding.forEach(print) //we have to give reference of the function

//----how to iterate over array of objects ["", "",""] [{},{},{}]

const myCoding=[
    {
        langName:'js',
        langFileName:'javascript'
    },
    {
        langName:'c++',
        langFileName:'c plus plus'
    },
    {
        langName:'swift',
        langFileName:'swift by apple'
    },
    {
        langName:'py',
        langFileName:'python'
    }
]

myCoding.forEach( (item)=>{
    console.log('language name is', item["langName"],', language file name is',item["langFileName"] )
})