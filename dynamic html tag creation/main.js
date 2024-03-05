const duaLipaInfo = {
  "artist": "Dua Lipa",
  "birthDate": "August 22, 1995",
  "birthPlace": "London, England",
  "nationality": "British",
  "genres": ["Pop", "Dance", "R&B"],
  "albums": [
    {
      "title": "Dua Lipa",
      "releaseYear": 2017,
      "singles": ["New Rules", "Be the One", "IDGAF"]
    },
    {
      "title": "Future Nostalgia",
      "releaseYear": 2020,
      "singles": ["Don't Start Now", "Physical", "Levitating"]
    }
  ],
  "awards": {
    "grammys": 2,
    "britAwards": 3,
    "mtvAwards": 1
  },
  "socialMedia": {
    "instagram": "@dualipa",
    "twitter": "@DUALIPA"
  }
};

function printInfo() {
  const container = document.getElementById("container");
  console.log(container);

  const artistName = document.createElement("h3");
  artistName.innerHTML = `<strong>Artist Name:</strong> ${duaLipaInfo.artist}`;
  container.appendChild(artistName);
  artistName.id = "header";

  const birthDate = document.createElement("div");
  birthDate.innerHTML = `<strong>Birthdate:</strong> ${duaLipaInfo.birthDate}`;
  container.appendChild(birthDate);

  const birthPlace = document.createElement("div");
  birthPlace.innerHTML = `<strong>BirthPlace:</strong> ${duaLipaInfo.birthPlace}`;
  container.appendChild(birthPlace);

  const nationality = document.createElement("div");
  nationality.innerHTML = `<strong>Nationality:</strong> ${duaLipaInfo.nationality}`;
  container.appendChild(nationality);

  const genres = document.createElement("div");
  let genresHTML = `<strong>Genres:</strong> `;
  for (let genre of duaLipaInfo.genres) {
    genresHTML += `${genre} `;
  }
  genres.innerHTML = genresHTML;
  container.appendChild(genres);

  const albums = document.createElement("div");
  let albumsHTML = `<strong> Albums :</strong>`;
  for (let album of duaLipaInfo.albums) {
    albumsHTML += `<ul>
   <li><strong>title :</strong>${album.title}</li> 
   <li><strong>releaseYear :</strong>${album.releaseYear}</li>
   <li><strong>singles :</strong>${album.singles}</li>
   </ul>`
  }
  albums.innerHTML = albumsHTML;
  container.appendChild(albums);

  const awards = document.createElement("div");
  let awardsHTML = `<strong>Awards:</strong>`;
  awardsHTML += `<ul>
    <li><strong>Grammys:</strong> ${duaLipaInfo.awards.grammys}</li>
    <li><strong>Brit Awards:</strong> ${duaLipaInfo.awards.britAwards}</li>
    <li><strong>MTV Awards:</strong> ${duaLipaInfo.awards.mtvAwards}</li>
  </ul>`;
  awards.innerHTML = awardsHTML;
  container.appendChild(awards);

  const socialMedia = document.createElement("div");
  let socialHtml = `<strong> socialMedia : <strong>`;
  socialHtml += `<ul>
    <li><strong>Instagram:</strong> ${duaLipaInfo.socialMedia.instagram}</li>
    <li><strong>Twitter:</strong> ${duaLipaInfo.socialMedia.twitter}</li>
  
  </ul>`;
  socialMedia.innerHTML = socialHtml;
  container.appendChild(socialMedia);


}

printInfo();

