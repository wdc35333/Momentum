const clock = document.querySelector("h2#clock");





function Timer() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2,"0");
    if(0<=hours && hours <= 12)
    {
        clock.innerText = `AM ${hours}: ${minutes}`;
    } else {
        clock.innerText = `PM ${hours-12}:${minutes}`
    }
}

Timer();
setInterval(Timer, 1000);
