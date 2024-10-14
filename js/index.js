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

        // Estructura HTML con frente y reverso sin "Ver más"
        const cardHTML = `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <div class="card-image">
                <img src="${championImageUrl}" alt="${champion.name}">
                </div class="info">
                <div>
                <h3>${champion.name}</h3>
                <p> ${champion.title}</p>
                </div>
            </div>
            <div class="card-back">
              <h3>${champion.name}</h3>
              <p>${champion.blurb}</p>
               <p class="tipos"> ${champion.tags}</p>
            </div>
          </div>
        </div>`;

        container.innerHTML += cardHTML;
      }

      // Seleccionar todas las tarjetas y añadirles el evento click para hacer flip
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          card.querySelector('.card-inner').classList.toggle('is-flipped'); // Hacer flip
        });
      });
    });
});
