// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");
const maxForm = document.querySelector("#max-num");
const maxInput = document.querySelector('#max-num input');
const selectForm = document.querySelector("#select-num");
const selectInput = document.querySelector('#select-num input');
const choose = document.querySelector("#choose");
const result = document.querySelector("#result");


const HIDDEN_CLASSNAME = "hidden";
// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }


function onMaxNumSubmit(event) {
    event.preventDefault();
    const maxNum = maxInput.value;
    const selectNum = selectInput.value;
    choose.innerText = `You chose: ${selectNum}, the machine chose: ${getRandomAribitrary(maxNum)}.`
    if (getRandomAribitrary(maxNum) === selectNum) {
        result.innerText = "You won!";
    } else {
        result.innerText = "You lose!";
    }
    
}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
// }

function getRandomAribitrary(max) {
    max.preventDefault();
    return Math.random() * max;
}


maxForm.addEventListener("submit", onMaxNumSubmit);
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);
