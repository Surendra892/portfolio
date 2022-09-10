function bodyload() {
    function showTime() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var session = "AM";
        var displayTime = document.getElementById("displayTime");

        if (h == 0) {
            h = 12;
        }

        if (h > 12) {
            h = h - 12;
            session = "PM";
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        var time = h + " " + ":" + " " + m + " " + ":" + " " + s + " " + session;

        displayTime.innerHTML = time;
        setTimeout(showTime, 1000);
    }
    showTime();
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
};


