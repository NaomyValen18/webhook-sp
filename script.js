document.getElementById("startBtn").addEventListener("click", function () {
    // Hide the main content
    document.getElementById("container").style.display = "none";

    // Show the jumpscare
    const jumpscare = document.getElementById("jumpscare");
    jumpscare.classList.remove("hidden");
    jumpscare.style.display = "flex";

    // Play the sound from URL
    const screamSound = new Audio("https://d.top4top.io/m_3151r6y1j0.mp3");
    screamSound.play();
});