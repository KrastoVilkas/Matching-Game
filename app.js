document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
  {
    name:'bats',
    img: 'images/bats.png'
  },
  {
    name:'bats',
    img: 'images/bats.png'
  },
  {
    name:'cap',
    img: 'images/cap.png'
  },
  {
    name:'cap',
    img: 'images/cap.png'
  },
  {
    name:'flash',
    img: 'images/flash.png'
  },
  {
    name:'flash',
    img: 'images/flash.png'
  },
  {
    name:'starlord',
    img: 'images/starlord.png'
  },
  {
    name:'starlord',
    img: 'images/starlord.png'
  },
  {
    name:'supes',
    img: 'images/supes.png'
  },
  {
    name:'supes',
    img: 'images/supes.png'
  },
  {
    name:'thor',
    img: 'images/thor.png'
  },
  {
    name:'thor',
    img: 'images/thor.png'
  }
]

//randomize cards
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []


//create your board
function createBoard() {
  for (let i = 0; i <cardArray.length; i++){
    var card = document.createElement('img')
    card.setAttribute('src', 'images/cardback.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

createBoard()


//check for matches
function checkForMatch(){
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]){
    alert ('You found a match')
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    cardsWon.push(cardsChosen)
  } else {
    alert ('Sorry, try again')
    cards[optionOneId].setAttribute('src', 'images/cardback.png')
    cards[optionTwoId].setAttribute('src', 'images/cardback.png')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardswon.length === cardArray.length/2){
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

//flip your card
function flipCard(){
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
  }
}


















































})
