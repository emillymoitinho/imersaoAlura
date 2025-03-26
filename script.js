const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestAPI(searchTerm) {
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    resultArtists.innerHTML = ""; // Limpa os resultados anteriores

    if (result.length === 0) {
        resultArtists.innerHTML = "<p>Nenhum artista encontrado</p>";
        return;
    }

    result.forEach(element => {
        const artistCard = document.createElement('div');
        artistCard.innerHTML = `
            <h3>${element.name}</h3>
            <img src="${element.urlImg}" alt="${element.name}" width="100">
        `;
        resultArtists.appendChild(artistCard);
    });

    resultArtists.classList.remove('hidden');
}


searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtists.classList.add('hidden');
        return;
    }

    requestAPI(searchTerm);
});

