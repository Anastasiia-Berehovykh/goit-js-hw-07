import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li>
   <a class="gallery__item" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
     />
   </a>
 </li>`
}).join('');
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function onGalleryContainerClick(event) {
  event.preventDefault();

  const isGallryItem = event.target.classList.contains("gallery__image");

  if (!isGallryItem) {
    return;
  }
  
  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
    captionsData: 'alt', captionDelay: 250, 
    

  });
  const currentActiveImage = document.querySelector('.is-active');
  
    if(currentActiveImage) {
     currentActiveImage.classList.remove('.is-active');
   }

   event.target.classList.add('.is-active');
}




galleryContainer.addEventListener("click", onGalleryContainerClick);
// Change code below this line

 console.log(galleryItems);
