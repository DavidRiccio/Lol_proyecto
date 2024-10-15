import Champion from './char.js';

document.getElementById('load-champions').addEventListener('click', () => {
  const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const champions = data.data;
      const container = document.getElementById('champion-container');
      container.innerHTML = '';  // Limpiar cualquier contenido previo
      for (let champ in champions) {
        const champion = new Champion(champions[champ]);
        const championImageUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

        const cardHTML = `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <div class="card-image">
                <img src="${championImageUrl}" alt="${champion.name}">
              </div>
              <h3>${champion.name}</h3>
              <p><strong>${champion.title}</strong></p>
            </div>
            <div class="card-back">
              <div class="back-info">
              <h3 class="back-name">${champion.name}</h3>
              <p class="back-blurb">${champion.blurb}</p>
              </div>
              <p class="tipos">${champion.tags.join(', ')}</p>
            </div>
          </div>
        </div>`;

        container.innerHTML += cardHTML; // Añadir la carta al contenedor
      }
    })
    .catch(error => console.error('Error al cargar los campeones:', error));
});
