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
    "uhd_picture1.jpg",
    "fhd_picture1.jpg",
    "fhd_picture2.jpg",
    "fhd_picture3.jpg",
    "fhd_picture4.jpg"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
document.body.style.backgroundImage = "url('./img/" + chosenImage + "')";


