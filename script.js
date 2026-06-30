// TIMER VARIABLES
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

// GET DISPLAY
const timeDisplay = document.getElementById("time");

// FORMAT TIME
function formatTime() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timeDisplay.innerText = `${h}:${m}:${s}`;
}

// START TIMER
function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        formatTime();
    }, 1000);
}

// STOP TIMER
function stopTimer() {
    clearInterval(timer);
    timer = null;
}

// RESET TIMER
function resetTimer() {
    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    formatTime();
}

// BUTTON EVENTS
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

// INIT DISPLAY
formatTime();