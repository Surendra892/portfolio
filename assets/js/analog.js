setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentdate = new Date();
  const secondsRatio = currentdate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentdate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentdate.getHours()) / 12;
  SetRotation(hourHand, hoursRatio);
  SetRotation(minuteHand, minutesRatio);
  SetRotation(secondHand, secondsRatio);
}

function SetRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();
