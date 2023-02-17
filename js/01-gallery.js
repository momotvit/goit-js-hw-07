

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);
  
////adding items to html element

const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);




/////adding event listener to each item





// galleryEl.querySelectorAll('.gallery__link').forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     const { target } = e;
//     const { dataset } = target;
//     const { source } = dataset;

//     basicLightbox.create(`
//       <img src="${source}" width="800" height="600">
//     `)
//     .show();
//   });
// });



////////adding event listener to galleryEL and deligating event click handlers



let scaledImg;

galleryEl.addEventListener('click', onClickImgOpen)

function onClickImgOpen(e) {
    e.preventDefault();
    if (e.target.nodeName === 'IMG') {
       scaledImg = basicLightbox.create(`
          <img src="${e.target.dataset.source}" width="1000" height="1000">
        `);
        scaledImg.show();
        galleryEl.addEventListener("keydown",closeImgOnEsc)
    }
    
}



//////////////// closing img on esk keydown 


function closeImgOnEsc(e) {
    if (e.code === 'Escape') {
        galleryEl.removeEventListener("keydown", closeImgOnEsc);
        scaledImg.close();
    }
}

