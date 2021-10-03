
const images = [
    "uhd_picture1.jpg",
    "fhd_picture1.jpg",
    "fhd_picture2.jpg",
    "fhd_picture3.jpg",
    "fhd_picture4.jpg"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];


document.body.style.backgroundImage = "url('./img/" + chosenImage + "')";


