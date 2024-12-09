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

```
