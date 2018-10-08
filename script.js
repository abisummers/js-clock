const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const time = document.querySelector(".time");
const button = document.querySelector(".buttonClick");
const now = new Date();

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

function revealTime() {
  button.innerHTML = "Current Time";
  time.innerHTML = now.toLocaleTimeString();
}
