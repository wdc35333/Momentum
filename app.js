const h1 = document.querySelector("div.hello:first-child h1");

function handleWindowResize() {
    let intViewportWidth = window.innerWidth;

    if (intViewportWidth > 1600) {
        document.body.classList.remove("middle");
        document.body.classList.add("big");
        
    } else if (intViewportWidth < 1600&&intViewportWidth > 1200) {
        document.body.classList.remove("big");
        document.body.classList.remove("small");
        document.body.classList.add("middle");

    } else {
        document.body.classList.remove("middle");
        document.body.classList.add("small");

    }

}
window.addEventListener("resize", handleWindowResize);
