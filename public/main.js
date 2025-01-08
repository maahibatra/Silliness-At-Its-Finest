const uselessButton = document.querySelector("#uselessButton");
const chickenContainer = document.querySelector("#chickenContainer");

uselessButton.addEventListener("mouseover", function() {
    uselessButton.style.top = Math.random() * 80 + "%";
    uselessButton.style.left = Math.random() * 80 + "%";
})

chickenContainer.addEventListener("mouseover", function() {
    const mooSound = new Audio("moo.mp3");
    mooSound.play();
})