const Rendercalc = document.querySelector("#render");
const time = document.querySelector(".time");
let check = 0;
let interval;
function render() {
  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);
  let result = a + b;
  let numberPool = [-1, 0, 1];
  check = numberPool[Math.floor(Math.random() * 3)];
  let fakeResult = result + check;
  Rendercalc.innerHTML = `${a} + ${b} = ${fakeResult}`;
}
const myPoint = document.querySelector(".my-point");
let point = 0;
function upDatePointTrue() {
  point += 1;
  myPoint.innerText = `${point}`;
  clearInterval(interval);
  document.querySelector("#true-sound").play();
}
function updatePointFalse() {
  point = 0;
  myPoint.innerText = `${point}`;
  clearInterval(interval);
  document.querySelector("#false-sound").play();
}
function timeLeft() {
  time.value = 8;
  interval = setInterval(() => {
    time.value = time.value - 1;
    if (time.value == "0") {
      console.log("time out");
      clearInterval(interval);
      updatePointFalse();
    }
  }, 1000);
}
render();
timeLeft();
const trueButton = document.querySelector("#true");
const falseButton = document.querySelector("#false");
trueButton.addEventListener("click", () => {
  if (check == 0) {
    upDatePointTrue();
  } else {
    updatePointFalse();
  }
  render();
  timeLeft();
});
falseButton.addEventListener("click", () => {
  if (check !== 0) {
    upDatePointTrue();
  } else {
    updatePointFalse();
  }
  render();
  timeLeft();
});
