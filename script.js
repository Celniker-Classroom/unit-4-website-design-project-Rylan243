
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");


if (display && startBtn && pauseBtn && resetBtn) {
  function timeToString(time) {
    const diffInMs = time;

    const minutes = Math.floor(diffInMs / 60000);
    const seconds = Math.floor((diffInMs % 60000) / 1000);
    const centiseconds = Math.floor((diffInMs % 1000) / 10);

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const formattedCenti = centiseconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}.${formattedCenti}`;
  }

  function startTimer() {
 
    if (timerInterval) return;

    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = timeToString(elapsedTime);
    }, 10);
  }

  function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    display.textContent = "00:00.00";
  }

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}


function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}