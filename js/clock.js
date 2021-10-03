const clock = document.querySelector("h2#clock");
const xMasForm = document.querySelector("h2#xMas");




function Timer() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2,"0");
    if(hours <= 12)
    {
        clock.innerText = `AM ${hours}: ${minutes}`;
    } else {
        clock.innerText = `PM ${hours-12}:${minutes}`
    }
   
    
}

Timer();
setInterval(Timer, 1000);
