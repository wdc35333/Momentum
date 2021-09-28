const maxForm = document.querySelector("#maxNum");
const maxInput = document.querySelector('#maxNum input');
const selectForm = document.querySelector("#selectNum");
const selectInput = document.querySelector('#selectNum input');
const choose = document.querySelector("#choose");
const result = document.querySelector("#result");



const HIDDEN_CLASSNAME = "hidden";

function onNumGameSubmit(event) {
    event.preventDefault();
    const maxNum = maxInput.value;
    const selectNum = selectInput.value;
    const randomValue = getRandomAribitrary(maxNum);
    console.log(randomValue);
    choose.innerText = `You chose: ${selectNum}, the machine chose: ${randomValue}.`
    if (randomValue == selectNum) {
        choose.classList.remove(HIDDEN_CLASSNAME);
        result.classList.remove(HIDDEN_CLASSNAME);
        result.innerText = "You won!";
    } else {
        choose.classList.remove(HIDDEN_CLASSNAME);
        result.classList.remove(HIDDEN_CLASSNAME);
        result.innerText = "You lose!";
    }
    
}



function getRandomAribitrary(max) {
    
    return Math.round(Math.random() * max);
}


selectForm.addEventListener("submit", onNumGameSubmit);