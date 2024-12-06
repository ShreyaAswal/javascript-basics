const coding=['js','java','c++','ruby']

const arr=coding.forEach((item) => {
    return item; //for each loop has bydefault a return type of void
})
//console.log(arr)//undefined

//----------filter function--------
const nums=[1,2,3,4,5,6,7,8,9,10]
const newArr=nums.filter((val)=> val > 4) //Returns only those elements of an array that meet the condition specified in a callback function.
//console.log(newArr)

const arr1=nums.filter((num)=>{
    if(num>4){
        num=num+1
        return num // does not modifying the values of elements, it can only return the element
    }
} )
//console.log(arr1)

//same thing to do by foreach

const arr2=[]
nums.forEach( (val)=>{
    if(val>6){
        arr2.push(val);
    }
})
//console.log(arr2);

const books=[
    {title:'book 1', genre:'comic', publish:1989 , edition:2004},
    {title:'book 2', genre:'science', publish:2000 , edition:2005},
    {title:'book 3', genre:'fiction', publish:2009 , edition:2014},
    {title:'book 4', genre:'science', publish:2005 , edition:2006},
    {title:'book 5', genre:'comic', publish:2012 , edition:2023},
    {title:'book 6', genre:'fiction', publish:2016 , edition:2018},
    {title:'book 7', genre:'history', publish:1995 , edition:1998},
    {title:'book 8', genre:'thriller', publish:2002 , edition:2012},
    {title:'book 9', genre:'science', publish:2022 , edition:2022},
    {title:'book 10', genre:'comic', publish:2002 , edition:2024},
    {title:'book 11', genre:'science', publish:2002 , edition:2024}
]

let mybook=books.filter( (bk)=> bk.genre==='science')
//console.log(mybook)

mybook=books.filter( (bk)=> bk.genre==='comic' && bk.publish<=2010)
console.log(mybook)