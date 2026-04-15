// add javascript here
let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");

  return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function start() {
  // If already running, do nothing
  if (timerInterval) return;

  startTime = Date.now() - elapsedTime; // Keep previous time when resuming
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = timeToString(elapsedTime);
  }, 1000);
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
}

// Hook up the buttons after the page loads
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("startBtn").addEventListener("click", start);
  document.getElementById("stopBtn").addEventListener("click", stop);
  document.getElementById("resetBtn").addEventListener("click", reset);
});