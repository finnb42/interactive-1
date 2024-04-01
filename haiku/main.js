let mouseX = 0;
let mouseY = 0;

function updateInfo() {
    let text;

    if (mouseX < window.innerWidth / 2) {
        text = "gently";
    } else {
        text = "quickly";
    }

    document.getElementById("x").innerText = mouseX;
    document.getElementById("y").innerText = mouseY;
    document.getElementById("s").innerText = window.scrollY;
    document.getElementById("t").innerText = text;

}

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    updateInfo();
});

function updateFontWeight() {
    // Calculate the font weight based on the scroll position
    // Assuming a maximum weight of 900 and minimum of 100
    let scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    let weight = Math.max(900 - scrollPercentage * 800, 100); // Ensures weight stays within 100 to 900

    document.querySelectorAll('p').forEach(p => {
        p.style.fontWeight = weight.toFixed(0);
    });
}

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    updateInfo();
});

window.addEventListener('scroll', () => {
    updateFontWeight(); // Update the font weight independently of other interactions
});