fetch('./data/data.json')
.then(response => response.json())
.then(data => {
    const joueursDiv = document.getElementById('joueurs');
    data.players.forEach(joueur => {
        const joueurElement = document.createElement('p');
        joueurElement.textContent = `${joueur.name} (${joueur.position}) - Note: ${joueur.rating}`;
        joueursDiv.appendChild(joueurElement);
    });
});