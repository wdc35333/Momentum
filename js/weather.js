const API_KEY = "e8e5d9624f4e9384ecee2e8e7e7a806b"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `/ ${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
        
    
    });
}

function onGeoError() {
            alert("Can't find you. No weather for you.")
        }

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
