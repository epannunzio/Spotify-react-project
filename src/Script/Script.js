import React, { useEffect } from "react"; // eslint-disable-line no-unused-vars

const Script = () => {
  useEffect(() => {
    const searchInput = document.getElementById('search-input');
    const resultArtist = document.getElementById('result-artist');
    const resultPlaylist = document.getElementById('result-playlists');

    if (!searchInput || !resultArtist || !resultPlaylist) {
      console.error("Um ou mais elementos não foram encontrados.");
      return;
    }

    function requestApi(searchTerm) {
      const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
    }

    function displayResults(result) {
      resultPlaylist.classList.add("hidden");
      const artistName = document.getElementById('artist-name');
      const artistImage = document.getElementById('artist-img');

      if (!artistName || !artistImage) {
        console.error("Elementos do artista não foram encontrados.");
        return;
      }

      result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
      });

      resultArtist.classList.remove('hidden');
    }

    function handleInput() {
      const searchTerm = searchInput.value.toLowerCase();
      if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
      }

      requestApi(searchTerm);
    }

    searchInput.addEventListener('input', handleInput);

    return () => {
      searchInput.removeEventListener('input', handleInput);
    };
  }, []); 
};

export default Script;
