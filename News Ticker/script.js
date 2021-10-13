const tickers = document.querySelectorAll('li')
const tickerEL = document.getElementById('ticker')

let currentLi = 1
let delayTime = 5000
let isPaused = false;

setInterval(() => {

    if (!isPaused) { // to pause
        if (currentLi <= tickers.length) {
            nextLi(currentLi);
            currentLi++;
        } else {
            currentLi = 1
        }
    } 
    
}, delayTime);

function nextLi(crt) {
   tickers.forEach((ticker) => ticker.classList.remove('show'))
   tickers[crt - 1].classList.add('show') 
}

// mouse Over will pause the Roll effect
tickerEL.addEventListener('mouseenter', () => {
    isPaused = true
})

tickerEL.addEventListener('mouseleave', () => {
    isPaused = false
})