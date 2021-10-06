// Bubbles Background

const bubblesNumber = 300  // Numbers of Bubbles

const Bubbles = document.querySelector('.bubbles')

for (let i = 0; i < bubblesNumber; i++) {
    var Bubble = document.createElement("div")
    Bubble.classList.add("bubble")

    // Add style for each Bubble
    // random size left duration and delay

    let sizeBubble = (Math.floor(Math.random() * 100))
    let leftBubble = (Math.floor(Math.random() * 100))
    let durationBubble = (Math.floor(Math.random() * 100))
    let delayBubble = (Math.floor(Math.random() * 10))

    Bubble.style.width = sizeBubble + "px";
    Bubble.style.height = sizeBubble + "px";
    Bubble.style.left = leftBubble + "%";
    Bubble.style.animationDuration = durationBubble + "s";
    Bubble.style.animationDelay = delayBubble + "s";

    Bubbles.appendChild(Bubble)
}