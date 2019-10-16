// - Change the background color of box1
document.querySelector('#box1').style.backgroundColor = "lightgreen"

// - Set the font size in box1s to 44px
document.querySelector('#box1s').style.fontSize = "44px"

// - Shrink box2 by half
const box2 = document.querySelector('#box2')
box2.style.width = "125px"
box2.style.height = "100px"

// - Double the size of box2s
const box2s = document.querySelector('#box2s')
box2s.style.transform = "scale(2)"

// - Create `div` with the class of `circle` and put it in the middle of box3
const box3 = document.querySelector('#box3')
const circle = document.createElement('div')
circle.className = "circle"
box3.appendChild(circle)

// - Write an arrow function for #box5 called `clearFinished` that will move all the completed tasks the chores in the list that have the class "done" to the #box5s.
function clearFinished() {
const choreDone = document.querySelectorAll('.done') //a space in class name means two different classes..
const choreEnd = document.querySelector('#box5s')
choreDone.forEach(choreDone => { choreEnd.appendChild(choreDone)
})
}

// - Call your function
clearFinished()

// - Write a function called addChore that adds a new item to the list of chores, giving it the class "undone."
function addChore(){ 
  const unDone = document.querySelector('ul')
  const liUnDone = document.createElement('li')
  liUnDone.innerHTML = 
    `<li .className = "undone"> trash (undone)</li>`
    unDone.appendChild(liUnDone)
} 

  //   -  using the .appendChild().
  //   -  using .innerHTML.
// ^^^ uses both :)
// - Call your function
addChore()

// - Reverse the text in #box6
let box6 = document.querySelector('#box6 p') 
let forNow = box6.textContent.split('').reverse().join('')
box6.textContent = forNow

// - Put <em></em> tags around the word "keep" in #box6s
let box6s = document.querySelector('#box6s p')
let test = box6s.textContent.split(/"/)
console.log(test)
box6s.innerHTML = `${test[0]} <em> ${test[1]} </em> ${test[2]}`