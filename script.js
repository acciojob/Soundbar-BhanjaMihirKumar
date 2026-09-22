const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Stop currently playing sound
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Get sound name from button
        let soundName = button.innerText;

        // Create audio
        currentAudio = new Audio(`sounds/${soundName}.mp3`);

        // Play sound
        currentAudio.play();
    });
});

stopButton.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});