window.onload = () => {
  var seconds = 00;
  var tens = 00;
  var minutes = 00;
  var appendMinutes = document.getElementById('minutes');
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var startButton = document.getElementById("startWatch");
  var stopButton = document.getElementById("stopWatch");
  var resetButton = document.getElementById("resetWatch");
  var interval;

  startButton.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  stopButton.onclick = () => {
    clearInterval(interval);
  };

  resetButton.onclick = () => {
    clearInterval(interval);
    minutes = "00"
    tens = "00";
    seconds = "00";
    appendMinutes = minutes;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHtml = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + tens;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = '0' + seconds;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }

  }
};
