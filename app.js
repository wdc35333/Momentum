const maxForm = document.querySelector("#maxNum");
const maxInput = document.querySelector('#maxNum input');
const selectForm = document.querySelector("#selectNum");
const selectInput = document.querySelector('#selectNum input');
const choose = document.querySelector("#choose");
const result = document.querySelector("#result");



function onNumGameSubmit(event) {
    event.preventDefault();
    const maxNum = maxInput.value;
    const selectNum = selectInput.value;
    const randomValue = getRandomAribitrary(maxNum);
    choose.innerText = `You chose: ${selectNum}, the machine chose: ${randomValue}.`
    if (randomValue === selectNum) {
        result.innerText = "You won!";
    } else {
        result.innerText = "You lose!";
    }
    
}



function getRandomAribitrary(max) {
    max.preventDefault();
    return Math.random() * max;
}


selectForm.addEventListener("submit", onNumGameSubmit);