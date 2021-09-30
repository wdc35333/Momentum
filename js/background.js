const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];
const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];
const colorButton = document.querySelector("#color-button");

function onButtonClick(event) {
    event.preventDefault();
    const chosenColor = colors[Math.floor(Math.random() * colors.length)]
    const chosenColor2 = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.background = "linear-gradient(90deg," + chosenColor + "," + chosenColor2 + ")";
}

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
colorButton.addEventListener("click", onButtonClick);

