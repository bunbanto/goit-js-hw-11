import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import { showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
//const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchText = event.target.elements['search-text'].value.trim();
  if (!searchText) {
    iziToast.error({
      message: 'Please enter a search term!',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      color: '#B51B1B',
      position: 'topRight',
    });
    return;
  }
  showLoader();
  gallery.innerHTML = '';

  fetchImages(searchText)
    .then(images => renderGallery(images))
    .catch(error => iziToast.error({ message: error }))
    .finally(() => hideLoader());
});
