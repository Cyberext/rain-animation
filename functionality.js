const rainContainer = document.getElementById('rain-container');
const rainSound = document.getElementById('rain-sound');
const lightning = document.getElementById('lightning');
const rainIntensityControl = document.getElementById('rain-intensity');

// Play rain sound
rainSound.play();

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    raindrop.style.opacity = Math.random();
    rainContainer.appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 3000);
}

let rainInterval = setInterval(createRaindrop, 100);

rainIntensityControl.addEventListener('input', (event) => {
    clearInterval(rainInterval);
    const intensity = 101 - event.target.value;
    rainInterval = setInterval(createRaindrop, intensity);
});

// Change background color gradually
const colors = ['#2c3e50', '#34495e', '#1abc9c', '#16a085', '#2980b9', '#3498db', '#9b59b6', '#8e44ad'];
let colorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 10000);

// Lightning Effect
function triggerLightning() {
    lightning.style.animation = 'flash 0.2s';
    setTimeout(() => {
        lightning.style.animation = '';
    }, 200);
}

setInterval(triggerLightning, Math.random() * 5000 + 5000);
