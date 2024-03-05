const artistsData = [
    {
        "name": "Dua Lipa",
        "birthYear": 1995,
        "country": "United Kingdom",
        "genres": ["Pop", "Dance"],
        "hitSongs": ["Don't Start Now", "New Rules"],
        "description": "Dua Lipa is known for her captivating pop and dance music."
    },
    {
        "name": "Katy Perry",
        "birthYear": 1984,
        "country": "United States",
        "genres": ["Pop"],
        "hitSongs": ["Firework", "Roar"],
        "description": "Katy Perry is a global pop sensation with numerous chart-topping hits."
    },
    {
        "name": "Billie Eilish",
        "birthYear": 2001,
        "country": "United States",
        "genres": ["Pop", "Alternative"],
        "hitSongs": ["Bad Guy", "Ocean Eyes"],
        "description": "Billie Eilish is a young and influential artist known for her unique style and impactful lyrics."
    },
    {
        "name": "Taylor Swift",
        "birthYear": 1989,
        "country": "United States",
        "genres": ["Pop", "Country"],
        "hitSongs": ["Love Story", "Shake It Off"],
        "description": "Taylor Swift is a versatile artist with a blend of pop and country influences."
    },
    {
        "name": "Ariana Grande",
        "birthYear": 1993,
        "country": "United States",
        "genres": ["Pop", "R&B"],
        "hitSongs": ["Thank U, Next", "7 Rings"],
        "description": "Ariana Grande is recognized for her powerful voice and a mix of pop and R&B styles."
    },
    {
        "name": "Lana Del Rey",
        "birthYear": 1985,
        "country": "United States",
        "genres": ["Indie Pop", "Alternative"],
        "hitSongs": ["Summertime Sadness", "Video Games"],
        "description": "Lana Del Rey is known for her dreamy and cinematic approach to music."
    }
];

let searchTimeout;

function createArtistCard(artist) {
    const card = document.createElement("div");
    card.classList.add("artist-card");
    card.innerHTML = `
        <h3 class="artist-name"><strong>Name:</strong> ${artist.name}</h3>
        <p><strong>Birth Year:</strong> ${artist.birthYear}</p>
        <p><strong>Country:</strong> ${artist.country}</p>
        <p><strong>Genres:</strong> ${artist.genres.join(", ")}</p>
        <p><strong>Hit Songs:</strong> ${artist.hitSongs.join(", ")}</p>
        <p><strong>Description:</strong> ${artist.description}</p>
    `;
    return card;
}

function displayArtistCards(artists) {
    const cardContainer = document.getElementById('artistCardsContainer');
    cardContainer.innerHTML = ''; // Clear existing cards

    artists.forEach(artist => {
        const card = createArtistCard(artist);
        cardContainer.appendChild(card);
    });
}

function filterArtists(searchTerm) {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        const filteredArtists = artistsData.filter(artist =>
            artist.name.toLowerCase().includes(searchTermLowerCase)
        );

        if (filteredArtists.length === 0) {
            NoArtistCardO(searchTerm);
        } else {
            displayArtistCards(filteredArtists);
        }
    }, 1000);
}

function createNoArtistCard(message) {
    const card = document.createElement("div");
    card.classList.add("artist-card");
    card.innerHTML = `
        <p><strong>${message}</strong></p>
    `;
    return card;
}

function NoArtistCardO(searchTerm) {
    const cardContainer = document.getElementById('artistCardsContainer');
    cardContainer.innerHTML = '';

    const messageCard = createNoArtistCard(`No artists found for: ${searchTerm}`);
    cardContainer.appendChild(messageCard);
}

document.getElementById("searchInput").addEventListener("input", function (event) {
    filterArtists(event.target.value);
});

// Initial display of all artist cards
displayArtistCards(artistsData);

