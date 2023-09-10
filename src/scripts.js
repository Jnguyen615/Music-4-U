import { userPlaylistData } from './data/apiData'
import './css/styles.css';
const cardsContainer = document.getElementById('cards');

//Event Listeners==
window.addEventListener("load", function() {
  userPlaylistData.forEach((playlist) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img class="arrow" src="https://cdn-icons-png.flaticon.com/128/122/122646.png">
      <img src="${playlist.userImage}" alt="User ${playlist.userName} Image">
      <p class="views">Views</p> 
      <p class="playlist-views"> ${playlist.views}</p>
      <h3>${playlist.userName}</h3>
      <p class="link">${playlist.playlistLink}</p>
      <p class="date">Thursday 08/07/23 3:44pm</p>
      <p class="playlist">Playlist: ${playlist.playlistName}</p>
      <p class="attachments">Attachments</p>
      <p class="attachment-number">${playlist.attachments}</p>
    `;
    cardsContainer.appendChild(card);
  });
});

    


  


