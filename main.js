var beerGuess = document.getElementById('beerGuess');
var wineGuess = document.getElementById('wineGuess');
var liquorGuess = document.getElementById('liquorGuess');
var absinth = document.getElementById('absinth');
var body = document.getElementById('body')
var hOne = document.getElementById('hOne')
var inputSubmit = document.getElementById('inputSubmit')
var img = document.getElementById('img')
var imgOne = document.getElementById('img-1')
var imgTwo = document.getElementById('img-2')
var imgThree = document.getElementById('img-3')
var results = document.getElementById('results')
var numberGuess = document.querySelectorAll('.numberGuess')

absinth.addEventListener('click', function () {
  body.style.backgroundColor = 'black'
  hOne.textContent = 'YOU BLACKED OUT!!!!'
  hOne.style.fontSize = '105px'
  hOne.style.color = 'white'
  liquorGuess.style.backgroundColor = 'black'
  beerGuess.style.backgroundColor = 'black'
  wineGuess.style.backgroundColor = 'black'
  absinth.style.backgroundColor = 'black'
  absinth.style.border = 'none'
  liquorGuess.placeholder = ''
  beerGuess.placeholder = ''
  wineGuess.placeholder = ''
  liquorGuess.style.border = 'none'
  wineGuess.style.border = 'none'
  beerGuess.style.border = 'none'
  inputSubmit.style.backgroundColor = 'black'
  inputSubmit.style.border = 'none'
  img.style.display = 'none'
  imgOne.style.display = 'none'
  imgTwo.style.display = 'none'
  imgThree.style.display = 'none'
  setGameOverAbs()
})

function checkGuess() {
  var userDrink = Number(beerGuess.value) + Number(liquorGuess.value) + Number(wineGuess.value)
  console.log(userDrink)
  if (userDrink <= 3) {
    results.textContent = 'You are fine to drive!'
    results.style.fontSize = '50px'
    results.style.color = 'goldenrod'
    setGameOverGood()
  }
  else if (userDrink > 3 && userDrink < 10) {
    results.textContent = 'Drive and go to jail!'
    results.style.backgroundColor = 'red'
    results.style.color = 'blue'
    results.style.fontSize = '50px'
    setGameOverBad()
  }
  else if (userDrink >= 10) {
    results.textContent = 'you ded...'
    results.style.backgroundColor = 'black'
    results.style.color = 'white'
    results.style.fontSize = '50px'
    setGameOverBad()
  }
  else {
    results.textContent = 'submit a valid amount of drinks please!'
    setGameOverGood()
  }
}

inputSubmit.addEventListener('click', checkGuess)

function setGameOverGood() {
  numberGuess[0].disabled = true
  numberGuess[1].disabled = true
  numberGuess[2].disabled = true
  inputSubmit.disabled = true
  resetButton = document.createElement('button');
  resetButton.textContent = 'Go Out Again';
  resetButton.style.fontSize = '25px';
  resetButton.style.marginLeft = '340px'
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function setGameOverBad() {
  numberGuess[0].disabled = true
  numberGuess[1].disabled = true
  numberGuess[2].disabled = true
  inputSubmit.disabled = true
  resetButton = document.createElement('button');
  resetButton.textContent = 'Make Better Choices';
  resetButton.style.fontSize = '25px';
  resetButton.style.marginLeft = '340px'
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function setGameOverAbs() {
  resetButton = document.createElement('button');
  resetButton.textContent = 'Drink Water';
  resetButton.style.fontSize = '25px';
  resetButton.style.marginLeft = '340px';
  resetButton.style.position = 'absolute';
  resetButton.style.top = '450px'
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGameAbs);
}

function resetGame() {
  resetButton.parentNode.removeChild(resetButton);
  results.style.backgroundColor = ''
  results.textContent = ''

  numberGuess[0].disabled = false
  numberGuess[1].disabled = false
  numberGuess[2].disabled = false
  inputSubmit.disabled = false

  liquorGuess.value = ''
  beerGuess.value = ''
  wineGuess.value = ''
}

function resetGameAbs() {
  body.style.backgroundColor = 'white'
  hOne.textContent = 'Can I Drive?!?!'
  hOne.style.fontSize = '32px'
  hOne.style.color = 'black'
  liquorGuess.style.backgroundColor = 'white'
  beerGuess.style.backgroundColor = 'white'
  wineGuess.style.backgroundColor = 'white'
  absinth.style.backgroundColor = '#EFEFEF'
  absinth.style.border = 'solid 1px'
  liquorGuess.placeholder = 'How many shots!?'
  beerGuess.placeholder = 'How many beers!?'
  wineGuess.placeholder = 'How much wine!?'
  liquorGuess.style.border = 'solid 1px'
  wineGuess.style.border = 'solid 1px'
  beerGuess.style.border = 'solid 1px'
  inputSubmit.style.backgroundColor = '#EFEFEF'
  inputSubmit.style.border = 'solid 1px'
  img.style.display = ''
  imgOne.style.display = ''
  imgTwo.style.display = ''
  imgThree.style.display = ''
  resetButton.parentNode.removeChild(resetButton);
}
