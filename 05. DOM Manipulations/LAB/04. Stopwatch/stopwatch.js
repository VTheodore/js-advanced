function stopwatch() {
    const timeElement = document.getElementById('time');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');

    let seconds = 0, minutes = 0;
    let intervalId; 

    startBtn.addEventListener('click', startHandler);
    stopBtn.addEventListener('click', stopHandler);

    function startHandler() {
        startBtn.setAttribute('disabled', "true");
        stopBtn.removeAttribute('disabled');

        intervalId = setInterval(() => {
            seconds++;

            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            const formattedSeconds = getFormatted(seconds);
            const formattedMinutes = getFormatted(minutes);

            timeElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
        }, 1000);
    }

    function stopHandler() {
        stopBtn.setAttribute('disabled', 'true');
        startBtn.removeAttribute('disabled');

        seconds = 0;
        minutes = 0;
        clearInterval(intervalId);
        timeElement.textContent = '00:00';
    }

    function getFormatted(time) {
        return time < 10 ? '0' + time : time;
    }
}