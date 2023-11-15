import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector("ul.gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </div>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" alt="${event.target.alt}" width="1280">`,
      {
        onShow: (instance) => {
          document.onkeydown = (event) => {
            if (event.code === "Escape") {
              instance.close();
            }
          };
        },
      }
    );
    instance.show();
  }
});
