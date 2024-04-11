const stationaryCircle = document.querySelector('.stationary-circle');
const rotatingCircle = document.querySelector('.rotating-circle');

// Increase the pathRadius for a wider path
const pathRadius = 600; // Adjust this value as needed for the desired path width

let angle = 0; // Initial angle

function updatePosition() {
    // Convert angle from degrees to radians: radians = degrees * (Math.PI / 180)
    let radians = angle * (Math.PI / 180);

    // Assuming the container's center as the reference
    let centerX =1000;
    let centerY = 1100; 

    // Calculate the new position centered around the container
    let newX = centerX + pathRadius * Math.cos(radians) - rotatingCircle.offsetWidth / 2;
    let newY = centerY + pathRadius * Math.sin(radians) - rotatingCircle.offsetHeight / 2;

    rotatingCircle.style.left = `${newX}px`;
    rotatingCircle.style.top = `${newY}px`;

    // Increment the angle for the next frame
    angle = (angle + 2) % 360;

    // Trigger the color change when they overlap, adjusted based on your orbit
    if (angle === 260) {
        changeColor();
    }
}

function changeColor() {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#1abc9c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    stationaryCircle.style.backgroundColor = randomColor;
}

// Update the position of the rotating circle every 20ms
setInterval(updatePosition, 20); 
