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
