<!-- project markdown file -->
#  Project related to DOM

## project link [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,index.html)

# solution code
## project 1 (color changer)
```javascript
const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')
//console.log(buttons)

buttons.forEach( (button)=>{
  button.addEventListener('click', (e)=> {
    //console.log(e)
    //console.log(e.target) // .target=> it gives from which target this event is coming
    const id=e.target.id
    switch(id){
      case 'grey':
        body.style.backgroundColor=id
        break;
      case 'white':
        body.style.backgroundColor=id
        break;
      case 'yellow':
        body.style.backgroundColor=id
        break;
      case 'blue':
        body.style.backgroundColor=id
        break;
    }
  })
})
```
## project 2
```javascript
const form=document.querySelector('form')
const result=document.querySelector('#results')

form.addEventListener('submit', (e)=>{
  e.preventDefault() //prevent the form from going to the server

  const h=parseInt(form.querySelector('#height').value) //by default , int form value passes in string (key:value pair and both datatype is string)

  const w=parseInt(form.querySelector('#weight').value) //parseInt()coverts a string to an integer
 
  console.log(h,w)
  
  //conditions for valid height and weight
  if(h=='' || h<0 || isNaN(h)){
    result.innerHTML='please add a valid height'
  }
  else if(w=='' || w<0 || isNaN(w)){
    result.innerHTML='please add a valid weight'
  }
  else{
    const bmi=((w*10000)/(h*h)).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`
    if(bmi<18.6){
      const text=document.createTextNode(', you are underwegiht')
      result.appendChild(text)
    }
    else if(bmi>=18.6 && bmi<=24.9){
      const text=document.createTextNode(', you are normal')
      result.appendChild(text)
    }
    else{
      const text=document.createTextNode(', you are overwegiht')
      result.appendChild(text)
    }
  }
})
```
 
## project 3
```javascript
const clock= document.querySelector('#clock')

setInterval(()=>{
  let date=new Date
  clock.innerHTML=date.toLocaleTimeString()
} ,1000)
```
