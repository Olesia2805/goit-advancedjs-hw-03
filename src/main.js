import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.input-seach');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = input.value.trim();

  gallery.innerHTML = '';

  fetchImages(searchQuery)
    .then(data => {
      if (data.hits.length !== 0) {
        renderImages(data.hits, gallery);
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    })
    .finally(() => {
      input.value = '';
    });
});
