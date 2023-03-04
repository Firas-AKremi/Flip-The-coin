var coin = document.querySelector('#coin')
var button = document.querySelector('#flip')
  var status = document.querySelector('#status')
   
var heads = document.querySelector('#headsCount')
var tails = document.querySelector('#tailsCount')

 var headsCount = 0
 var tailsCount = 0


function changeff(callback, ms) {
  setTimeout(callback, ms)
}

function result(result) { 
  var counter = 0
  var count = 0
  var counts = {
    heads: headsCount, tails: tailsCount
  }
  
       for (var side in counts) {
    if (result === side) {
      if (side === 'heads') {
        counter = heads
      } else {
        counter = tails
      }
      counts[side]++
      count = counts[side]
      break
    }
  }
  
  counter.innerText = count
}



  function flipCoin() { // this is for the flipping the coin randomly.
  coin.setAttribute('class', '')
  var random = Math.random()
  var result
  if (random < 0.5) {
    result = 'heads'
  } else {
    result = 'tails'
  }
  animateCoin(result)}


function animateCoin(result) { // this is for the animation of the flipping process.
  changeff(function() {
    coin.setAttribute('class', 'animate-' + result)
    changeff(result.bind(null, result), 2900)
  }, 100)}


button.onclick = flipCoin
