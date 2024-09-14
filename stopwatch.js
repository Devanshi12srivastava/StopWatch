let displayTime = document.querySelector("#displayTime");
let RestartBtn = document.querySelector(".btn1");
let playBtn = document.querySelector(".btn2");
let stopBtn = document.querySelector(".btn3");

let [seconds, minutes, hours] = [0, 0, 0];
let timerId = null;

playBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId); 
    }
    timerId = setInterval(startTimer, 1000); 
});

stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; 
});

RestartBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; 
    [seconds, minutes, hours] = [0, 0, 0]; 
    displayTime.innerHTML = `00:00:00`; 
});

function startTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}
