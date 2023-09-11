let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer;
let lapCount = 0;

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let lapList = document.getElementById("lap-list");

startBtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  lapList.innerHTML = "";
  lapCount = 0;
});

lapBtn.addEventListener("click", function () {
  if (lapCount == 0) {
    lapList.innerHTML = `<span class='item'><b>SR.NO</b></span><span class='item'><b>Lap Name</b></span><span class='item'><b>Time</b></span>`;
  }
  lapCount++;
  let curhr = document.getElementById("hr").innerHTML;
  let curmin = document.getElementById("min").innerHTML;
  let cursec = document.getElementById("sec").innerHTML;
  lapList.innerHTML += `<span class='item'>${lapCount}</span><span class='item'>Lap ${lapCount}</span><span class='item'>${curhr}:${curmin}:${cursec}</span>`;
});

function stopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }
    let hrString = hour;
    let minString = minute;
    let secString = second;
    if (hour < 10) {
      hrString = "0" + hrString;
    }
    if (minute < 10) {
      minString = "0" + minString;
    }
    if (second < 10) {
      secString = "0" + secString;
    }
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    setTimeout(stopWatch, 10);
  }
}
