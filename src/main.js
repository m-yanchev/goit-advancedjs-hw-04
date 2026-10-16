import {
  createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton
} from "./js/render-functions.js";
import { getImagesByQuery } from "./js/pixabay-api.js";
import { showError, showInfo } from "./js/messages.js"

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loadMoreButton: document.querySelector('.load-more'),
};

let query = ''

const pagination = {
  page: 1,
  perPage: 15,
  totalPages: 0,

  reset: function () {
    this.page = 1;
  },

  setTotalPages: function (totalHits) {
    this.totalPages = Math.ceil(totalHits / this.perPage);
  },

  isNextPage: function () {
    return this.page < this.totalPages;
  },

  nextPage: function() {
    this.page++;
  }
}

const onSubmit = async (event) => {
  try { 
    event.preventDefault();

    query = event.target.elements['search-text'].value.trim();
    if (!query) {
      showError('Query cannot be empty');
      return;
    }

    clearGallery();
    hideLoadMoreButton();
    showLoader();
    pagination.reset();

    const data = await getImagesByQuery({
      query,
      page: pagination.page,
      perPage: pagination.perPage,
    });
    if (data.hits.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
      return;
    }

    pagination.setTotalPages(data.totalHits);
    createGallery(data.hits);
    if (!pagination.isNextPage()) {
      showInfo("We're sorry, but you've reached the end of search results.");
    } else {
      showLoadMoreButton();
    }

  } catch (error) {
    showError(`An error occurred: ${error.message}`);

  } finally {
    hideLoader();
  }
};

const onLoadMoreClick = async () => {
  try {
    hideLoadMoreButton();
    showLoader();

    pagination.nextPage();
    const data = await getImagesByQuery({query, page: pagination.page, perPage: pagination.perPage});
    createGallery(data.hits);

    const cardHeight = refs.gallery.firstElementChild.getBoundingClientRect().height;
    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    })

    if (!pagination.isNextPage()) {
      showInfo("We're sorry, but you've reached the end of search results.");
    } else {
      showLoadMoreButton();
    }

  } catch (error) {
    showError(`An error occurred: ${error.message}`);

  } finally {
    hideLoader();
  }
};

refs.form.addEventListener('submit', onSubmit);
refs.loadMoreButton.addEventListener('click', onLoadMoreClick);