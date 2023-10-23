const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');



const newYears = window.prompt("Enter date: ");

function countdown() {

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24) ;

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const mins = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML =  days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secEl.innerHTML = seconds;

}


countdown();

setInterval(countdown, 1000);

