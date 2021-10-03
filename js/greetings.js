const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const date = new Date();

const GOODMORNING = "좋은 아침입니다, ";
const GOODAFTERNOON = "점심 맛있게 드세요, ";
const GOODEVENING = "벌써 저녁이네요, ";
const GOODNIGHT = "좋은 하루였어요, ";
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    let timeGreetings = "";
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const hours = date.getHours();
    if (6 <= hours && hours <= 10) {
        timeGreetings = GOODMORNING;
    } else if (10 <= hours && hours <= 15) {
        timeGreetings = GOODAFTERNOON;

    } else if (15 <= hours && hours <= 20) {
        timeGreetings = GOODEVENING;
    } else {
        timeGreetings = GOODNIGHT;
    }
    greeting.innerText = `${timeGreetings} ${username}.`;

}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}
