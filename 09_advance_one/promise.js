//promise is an object which represent the overall completion/failure of an async operation
//async operation 
//the states of promises are- 1)pending(initial state)  2)fulfilled-operation completed successfully  3)rejected-operation failed
//promises complete in future , for ex-database calls, cryptographic operation, network operations

//before promises were introduced in JS , we use them by injecting some libraries like bluebird, Q. but now promises are in JS by default.

//promises reduces callback hell (i.e function call inside another function, then that func calls another fun and so on)


//-------handling promises using then and catch
const promiseOne= new Promise(function(resolve, reject){
    //Do an async task like DB calls etc
    setTimeout(()=>{
        console.log('Async task is complete')
        resolve()//write it just after the async task is completed (this connect 'resolve' with 'then') 
        //we can also pass parameters for 'then' in 'resolve'
    },4000)
    
})
promiseOne.then(()=>{
    console.log('promise consumed , function does not have error')
})


new Promise( (res,reject)=>{
    setTimeout(()=>{
        console.log('Async task 2 is complete')
        res({username:'shreya', password:'123'})
    },3000)
})
.then((user)=> {
    console.log(user.username)
})

//error based checking
const promiseThree=new Promise( (resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error)resolve({username:'Tanu', pswd:'1234'})
    
        else reject('error:somthing went wrong ')
    },2000)
})
.then( (user)=>{
    console.log(user)
    return user.name //this is called  thenable (return to next 'then')
})
.then( (username)=>{
    console.log(username)
})
.catch((str)=>{ //used to catch error
    console.log(str)
})
.finally(()=>{ //callback to execute when the Promise is settled (fulfilled or rejected)
    console.log('promise is settled(either resolve/reject)')
})

//--------handling promises using async- await


//async- await=> wait for the task to get complete and if its not get completed, then it does not move forward and gives error there only
const promiseFive=new Promise( (resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error)resolve({username:'Javascript', pswd:'1234'})
    
        else reject('error:JS went wrong ')
    },1000)
})

async function consumePromiseFive(){
    //const response=await promiseFive
    //console.log('response 5:',response) //without try-catch block , it does not handle error gracefully
    try {
        const response=await promiseFive
        console.log('response 5:',response)
    } catch (str) { //handles error
        console.log(str)
    }
}
consumePromiseFive()

//-------Fetch and Request interface of fetch API- it represent the resourse req(ex-request.json() etc)

//using async func
// async function githubInfo(){
//     try {
//         const response = await fetch('https://api.github.com/users/ShreyaAswal') //object which returns a promise having a response

//         const data= await response.json() //takes the request (in this case req is 'response') & returns a Promise that resolves to a JavaScript object. 
//         console.log(data);
//     } catch (error) {
//         console.log('E:',error)
//     }
// } 
// githubInfo()

//using then -catch
fetch('https://api.github.com/users/ShreyaAswal')
.then( (response)=> {
    return response.json()
})
.then ((objectGit)=> {
    console.log(objectGit)
})
.catch( (error)=>{
    console.log(error)
})