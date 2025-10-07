document.addEventListener('DOMContentLoaded', () => {
  fetchCharacters();
});

let characters = [];

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        openModalWithData(card.dataset.id);
    });
});

async function fetchCharacters(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        renderCards(characters);
    }).catch(error => console.error('Error fetching characters:', error));
}

function openModalWithData(id) {
    const char = characters.find(c => c.id == id);
    populateModal(char);
}

function populateModal(character) {
    const modal = document.querySelector('.modal');

    modal.querySelector('.modal-image img').src = character.image;
    modal.querySelector('.modal-image img').alt = character.name;

    modal.querySelector('.character-title-modal').textContent = character.name;
    modal.querySelector('.character-type').textContent = character.species || 'N/A';
    modal.querySelector('.character-status').textContent = character.status;

    modal.querySelector('.origin').textContent = character.origin.name;
    modal.querySelector('.last-location').textContent = character.location.name;
    modal.querySelector('.gender').textContent = character.gender;

    const episodesContainer = modal.querySelector('.episodes-buttons');
    episodesContainer.innerHTML = character.episode.map((ep, index) =>
        `<button class="episode-btn">${index + 1}</button>`
    ).join('');

    modal.classList.add('show');

    modal.querySelector('.modal-close').onclick = () => modal.classList.remove('show');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('show'); }
}

function renderCards(characters){
    const container = document.querySelector('.card-container');
    container.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = character.id;
        const statusClass = character.status.toLowerCase();

        card.innerHTML = `
            <div class="card">
                <div class="card-image">
                    <img src="${character.image}" alt="${character.name}" />
                </div>
                <div class="card-body">
                    <h1 class="character-title">${character.name}</h1>
                    <p class="status ${statusClass}">
                        <span class="status-dot"></span>${character.status} - ${character.species}
                    </p>
                    <p class="character-location">
                    <span>Last known location:</span> <br>
                    ${character.location.name}
                    </p>
                    <p class="character-episode">
                    <span>First seen in:</span> ${character.episode[0]}
                    </p>
                </div>
            </div>
        `;

        card.addEventListener("click", () => openModalWithData(character.id));
        container.appendChild(card);
    });
};