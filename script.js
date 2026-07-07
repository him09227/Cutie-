const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Yes button
yesBtn.addEventListener("click", () => {
    alert("❤️ Yay! You clicked Yes!");
});

// Function to move No button
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});
