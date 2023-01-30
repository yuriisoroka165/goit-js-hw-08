// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function galleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            `;}).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup(galleryItems));

/////////////////////////////////////////////////////////////////////////////////////////////////

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});

/////////////////////////////////////////////////////////////////////////////////////////////////