const uselessButton = document.querySelector("#uselessButton");

uselessButton.addEventListener("mouseover", function() {
    uselessButton.style.top = Math.random() * 80 + "%";
    uselessButton.style.left = Math.random() * 80 + "%";
})