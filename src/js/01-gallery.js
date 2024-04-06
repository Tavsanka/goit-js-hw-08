// Change code below this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
for (const item of galleryItems) {
  const html = `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"/></a> </li>`;
  gallery.insertAdjacentHTML('beforeend', html);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
console.log(galleryItems);
