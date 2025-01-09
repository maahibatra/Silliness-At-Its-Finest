let sparkleTimeout = false;

document.addEventListener("mousemove", (e) => {
    if(!sparkleTimeout) {
        const star = document.createElement("div");
        star.textContent = "✨";
        star.style.fontSize = "3vw";
        star.style.position = "absolute";
        star.style.left = e.pageX + "px";
        star.style.top = e.pageY + "px";
        star.style.pointerEvents = "none";
        star.style.animation = "fade 1s linear";
        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1000);

        sparkleTimeout = true;
        setTimeout(() => {
            sparkleTimeout = false;
        }, 50)
    }
});

chickenContainer.addEventListener("mouseover", function() {
    const mooSound = new Audio("moo.mp3");
    mooSound.play();
});

let hover = 0;
let click = 0;
const messages = [
    "HAHA LOSER",
    "ARE YOU GONNA SPEND ALL YOUR LIFE TRYING TO CLICK ME?!",
    "L SKILL ISSUE",
    "GIVE UP UR NOT GETTING ME"
]

uselessButton.addEventListener("mouseover", function() {
    uselessButton.style.top = Math.random() * 67 + "%";
    uselessButton.style.left = Math.random() * 80 + "%";
    hover++;

    if(hover%5 === 0) {
        let i = hover/5 - 1;
        if(i < messages.length) {
            uselessButtonText.textContent = messages[i];
        } else {
            uselessButtonText.textContent = "TRY HARDER MWAHAHAHA"
        }
    }
});

uselessButton.addEventListener("click", function() {
    click++;
    count.textContent = click;
});

let i = 0;
const jokes = [
    "Why did the bicycle fall over? bc it was too tired.",
    "What's brown and stick? A STICK!!",
    "What do you call sm1 with no body and no nose? Nobody knows!",
    "Damn you take a little bit to laugh, uhhhm. Okay, what do you call a fake spaghetti? Impasta!",
    "Why did the scarecrow win an award? He was outstanding in his field.",
    "Still no laugh? :( Why don't oysters donate to charity? Because they're shellfish!!",
    "I'M OUTTA JOKES GO SOMEWHERE ELSE >:("
]

jokeButton.addEventListener("click", function() {
    if(jokeButtonText.style.visibility === "visible" && i < 7) {
        jokeButtonText.textContent = jokes[i];
        i++;
    } else if(i >= 7) {
        //skip
    } else {
        jokeButtonText.style.visibility = "visible";
    }
});

setTimeout(() => {
    popupContainer.style.display = "flex";
}, 15000);

closePopup.addEventListener("click", function() {
    popupContainer.style.display = "none";
});

setTimeout(() => {
    circusAd.style.display = "block";
}, 20000);

circusAd.addEventListener("click", function() {
    circusContainer.style.display = "flex";
});

const performance = [
    "       🎩",
    "       🎩  🪄",
    " 💨 💨 🎩 💨 🪄 💨",
    "   💨  🎩  🪄 💨💨",
    "  💨💨 🎩  🪄 🕊️💨",
    "   ✨  🎩  🪄 🕊️✨",
    "       🎩 🕊️ 🪄",
    "    🕊️ 🎩  🪄",
    "      💨💨",
    "       the end. (click on tent to replay)"
]

circusImage.addEventListener("click", function() {
    circusText.style.fontSize = "5vw";
    for(let i = 0; i < performance.length; i++) {
        setTimeout(() => {
            circusText.textContent = performance[i];
            if(i === performance.length - 1) {
                circusText.style.fontSize = "2vw";
            }
        }, i * 1000);
    }
});

closeCircus.addEventListener("click", function() {
    circusContainer.style.display = "none";
});