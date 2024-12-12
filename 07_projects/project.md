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

## project 4
```javascript
let num=Math.round((Math.random()*100+1))
console.log(num)
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const prevguess=document.querySelector('.guesses')
const rem=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHi')

let chance=10
let lastGuesses=[]
startGame()

function startGame(){
  submit.addEventListener('click', (e)=>{
    e.preventDefault()
    const guess=parseInt(userinput.value)
    validateGuess(guess)
  })
}
  
function validateGuess(guess){
  if(isNaN(guess) || guess<1 || guess>100){
    lowOrHigh.innerHTML='please enter a valid number'
  }
  else checkGuess(guess)
}

function checkGuess(guess){
  if(guess===num){
    lowOrHigh.innerHTML='<h2>you guessed it RIGHT !!!!</h2>'
    playGame=false
    newGame()
  }
  else if(guess<num){
    lowOrHigh.innerHTML='<h2>you guessed it TOOO low !!!!</h2>'
    updateValues(guess);
  }
  else{
    lowOrHigh.innerHTML='<h2>you guessed it TOOO high !!!!</h2>'
    updateValues(guess);
  }
}

function updateValues(guess){
  chance--;
  lastGuesses.push(guess)
  userinput.value=''
  prevguess.innerHTML+=`${guess}  `
  rem.innerHTML=chance
  if(chance==0)endGame()
}

function endGame(){
  userinput.setAttribute('disabled','')
  submit.value='Start new Game'
  lowOrHigh.innerHTML='<h2>YOU LOST</h2>'
  newGame()
}

function initial(){
  userinput.removeAttribute('disabled')
  userinput.value=''
  submit.value='Submit guess'
  lastGuesses=[]
  chance=10
  rem.innerHTML='10'
  prevguess.innerHTML=''
  num=Math.round((Math.random()*100+1))
  console.log(num)
  submit.removeEventListener('click',initial)
  startGame()
}
function newGame(){
  submit.addEventListener('click',initial)
}
```
## project 5
```javascript
console.log('Project 5')
const insert=document.querySelector('#insert')
document.addEventListener('keydown',(e)=>{
  const key=e.key
  const code=e.code
  insert.innerHTML=`
  <div class="color">
  <table>
    <tr>
      <th>key</th>
      <th>code</th>
    </tr>
    <tr>
      <th>${key==' '?'space':key}</th>
      <th>${code}</th>
    </tr>
  </table>
  </div>
  `
})
```

## project 6
```javascript
function RandomColor(){
  hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    const idx=Math.round(Math.random()*15)
    color+=hex[idx]
  }
  return color
}
let colorChange
document.querySelector('#start').addEventListener('click', ()=>{
  
  colorChange=setInterval( ()=>{
    const color=RandomColor()
    document.body.style.backgroundColor=color
    console.log('color change')
  },1000)
})
document.querySelector('#stop').addEventListener('click',()=>{
  console.log('color change stopped')
  clearInterval(colorChange)
})
```