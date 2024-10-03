const searchBar = document.getElementById('search-bar');
const planets = document.querySelectorAll('.planet');

searchBar.addEventListener('keyup', function() {
    const searchTerm = searchBar.value.toLowerCase();
    planets.forEach(planet => {
        const planetName = planet.querySelector('.planet-name').innerText.toLowerCase();
        if (planetName.includes(searchTerm)) {
            planet.style.display = '';
        } else {
            planet.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Create the rocket cursor element
    const rocketCursor = document.createElement('img');
    rocketCursor.src = 'img/rocket.png'; // Path to your rocket image
    rocketCursor.classList.add('cursor');
    document.body.appendChild(rocketCursor);

    // Create the flare effect element
    const flare = document.createElement('div');
    flare.classList.add('flare');
    document.body.appendChild(flare);

    let mouseX = 0, mouseY = 0;  // Actual mouse position
    let rocketX = 0, rocketY = 0;  // Rocket position with delay

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;

        // Update flare position immediately
        flare.style.left = `${mouseX}px`;
        flare.style.top = `${mouseY}px`;
        flare.style.opacity = '1';
        flare.style.animation = 'flareMove 0.3s ease-out';
    });

    // Animate the rocket cursor with delay
    function animateRocket() {
        // Apply delay effect (0.2 seconds)
        rocketX += (mouseX - rocketX) * 0.1;
        rocketY += (mouseY - rocketY) * 0.1;

        // Move rocket icon
        rocketCursor.style.transform = `translate(${rocketX}px, ${rocketY}px)`;

        // Request the next animation frame
        requestAnimationFrame(animateRocket);
    }

    // Start animation
    animateRocket();

    // Remove flare when mouse leaves the window
    document.addEventListener('mouseout', () => {
        flare.style.opacity = '0'; // Hide flare when mouse leaves the window
    });
});
