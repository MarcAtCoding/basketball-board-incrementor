let timeSecond = 600;
const timer = document.querySelector('.timer');
displayTime(timeSecond); 

function displayTime(second) { 
  const min = Math.floor(second / 60); 
  const sec = Math.floor(second % 60); 
  timer.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      endCount();
      clearInterval(countDown);
    }
  }, 1000);

function endCount() {
  timer.innerHTML = "Time out";
}

let homeScore = document.querySelector('.home-score')
let scoreHome = 0
let btn1IncHome = document.querySelector('.btn-incre1-home').addEventListener('click', btn1Home)
let btn2IncHome = document.querySelector('.btn-incre2-home').addEventListener('click', btn2Home)
let btn3IncHome = document.querySelector('.btn-incre3-home').addEventListener('click', btn3Home)
let guestScore = document.querySelector('.guest-score')
let scoreGuest = 0
let btn1IncGuest = document.querySelector('.btn-incre1-guest').addEventListener('click', btn1Guest)
let btn2IncGuest = document.querySelector('.btn-incre2-guest').addEventListener('click', btn2Guest)
let btn3IncGuest = document.querySelector('.btn-incre3-guest').addEventListener('click', btn3Guest)

function btn1Home(){
    let result = scoreHome + 1
    homeScore.innerHTML = result
    scoreHome++
}
function btn2Home(){
    let result = scoreHome + 2
    homeScore.innerHTML = result
    scoreHome++
    scoreHome++
}
function btn3Home(){
    let result = scoreHome + 3
    homeScore.innerHTML = result
    scoreHome++
    scoreHome++
    scoreHome++
}

function btn1Guest(){
    let result = scoreGuest + 1
    guestScore.innerHTML = result
    scoreGuest++
}
function btn2Guest(){
    let result = scoreGuest + 2
    guestScore.innerHTML = result
    scoreGuest++
    scoreGuest++
}
function btn3Guest(){
    let result = scoreGuest + 3
    guestScore.innerHTML = result
    scoreGuest++
    scoreGuest++
    scoreGuest++
}
console.log("hi")