const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnRestart = document.querySelector(".btn-restart");

let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let sec = 0;
let min = 0;
let hrs = 0;
let interval;

btnStart.addEventListener("click",()=>{
    interval = setInterval(startWatch,1000);
})

btnStop.addEventListener("click",()=>{
    clearInterval(interval)
})

btnRestart.addEventListener("click",()=>{
    clearInterval(interval);
    sec = 0;
    min = 0;
    hrs = 0;
    seconds.innerText = "0" + sec;
    minutes.innerText = "0" + min;
    hours.innerText = "0" + hrs;
})

const startWatch = ()=>{
    sec++;
    seconds.innerText = sec;
    if(sec >= 60){
        min++;
        minutes.innerText = min;
        sec = 0;
        seconds.innerText = sec;
    } else if(min >= 60){
        hrs++;
        hours.innerText = hrs;
        min = 0;
        minutes.innerText = min;
        sec = 0;
        seconds.innerText = sec;
    } if (sec <= 9){
        seconds.innerText = "0" + sec;
    } if (min <= 9){
        minutes.innerText = "0" + min;
    } if (hrs <= 9){
        hours.innerText = "0" + hrs;
    }
}