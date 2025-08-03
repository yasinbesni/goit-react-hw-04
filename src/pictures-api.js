import axios from "axios";
const key = "jBwlHsH9W2ysWF_F0MeGx0_Nq7J-JavM4oeq8ZfN5yI";
const baseUrl = `https://api.unsplash.com/search/photos?client_id=${key}`;

const fetchImages = async (query, page) => {
  const response = await axios.get(`${baseUrl}&query=${query}&page=${page}`);
  return response.data.results;
};

export default fetchImages;
