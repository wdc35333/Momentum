const clock = document.querySelector("h2#clock");
const xMasForm = document.querySelector("h2#xMas");
const xMas = new Date(2021, 11, 25, 0, 0, 0, 0);

const DAY = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MINUTE = 1000 * 60;
const SECOND = 1000;
function sayHello() {
    console.log("hello");
}

function xMasTimer() {
    const date = new Date();
    const distance = xMas.getTime() - date.getTime();
    const days = String(Math.floor(distance / DAY)).padStart(2,"0");
    const hours = String(Math.floor((distance - days * DAY) / HOUR)).padStart(2,"0");
    const minutes = String(Math.floor((distance - days * DAY - hours * HOUR) / MINUTE)).padStart(2,"0");
    const seconds = String(Math.floor((distance - days * DAY - hours * HOUR - minutes * MINUTE) / SECOND)).padStart(2,"0");
    clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

xMasTimer();
setInterval(xMasTimer, 1000);
