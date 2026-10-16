import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-wrapper'),
  loadMoreButton: document.querySelector('.load-more'),
};

export const createGallery = images => {
  const markup = images.map(({
    largeImageURL, webformatURL, tags, likes, views, comments, downloads
  }) => `
    <li class="gallery-item">
  	  <a class="gallery-link" href="${largeImageURL}">
  	  	<img
  	  		class="gallery-image"
  	  		src="${webformatURL}"
  	  		alt="${tags}"
  	  		/>
        <ul class="gallery-meta">
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Likes:</span>
            ${likes}
          </li>
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Views:</span>
            ${views}
          </li>
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Comments:</span>
            ${comments}
          </li>
          <li class="gallery-meta-item">
            <span class="gallery-meta-label">Downloads:</span>
            ${downloads}
          </li>
        </ul>
  	  </a>
    </li>
  `).join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export const clearGallery = () => {
  refs.gallery.innerHTML = '';
}

export const showLoader = () => {
  refs.loader.classList.remove('is-hidden');
}

export const hideLoader = () => {
  refs.loader.classList.add('is-hidden');
}

export const showLoadMoreButton = () => {
  refs.loadMoreButton.classList.remove('is-hidden');
}

export const hideLoadMoreButton = () => {
  refs.loadMoreButton.classList.add('is-hidden');
}