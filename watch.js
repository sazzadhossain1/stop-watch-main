let ms = 0;
let s = 0;
let m = 0;
let counter;
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

const time = document.querySelector(".time");

start.addEventListener("click", function () {
  if (!counter) {
    counter = setInterval(run, 10);
  }
  function run() {
    time.textContent = currentTime();
    ms++;
    if (ms === 100) {
      ms = 0;
      s++;
    }
    if (s === 60) {
      s = 0;
      m++;
    }
  }
});

stop.addEventListener("click", function () {
  clearInterval(counter);
  counter = false;
});
reset.addEventListener("click", function () {
  clearInterval(counter);
  counter = false;
  ms = 0;
  s = 0;
  m = 0;
  time.textContent = currentTime();
});

const currentTime = () => {
  return m + ":" + s + ":" + ms;
};
