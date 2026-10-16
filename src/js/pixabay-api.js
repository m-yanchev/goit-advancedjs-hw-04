import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImagesByQuery = async ({ query, page, perPage = 15 }) => {
  const searchParams = {
    key: '57971034-8c5a8e627d304003806052b2f',
    q: query,
    page: page,
    per_page: perPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  const response = await axios.get('/', { params: searchParams });
  
  return response.data;
};