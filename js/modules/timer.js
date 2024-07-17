function timer(timeSelector, deadline) {
    // Timer
    const endTime = '2024-12-20';

    function timeSetFunction(deadline) {
        const t = Date.parse(deadline) - Date.parse(new Date());
        let days, hours, minutes, seconds;

        if (t == 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor(t / (1000 * 60 * 60) % 24);
            minutes = Math.floor((t / 1000 / 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    };

    function showTimeFunction(selector, deadline) {
        const t = document.querySelector(selector);
        const days = t.querySelector('#days');
        const hours = t.querySelector('#hours');
        const minutes = t.querySelector('#minutes');
        const seconds = t.querySelector('#seconds');
        const timeInterval = setInterval(timeOnDiv, 1000);

        function timeOnDiv() {
            const total = timeSetFunction(deadline);

            days.innerHTML = getZero(total.days);
            hours.innerHTML = getZero(total.hours);
            minutes.innerHTML = getZero(total.minutes);
            seconds.innerHTML = getZero(total.seconds);

            if (total.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    showTimeFunction(timeSelector, deadline);

}

export default timer;