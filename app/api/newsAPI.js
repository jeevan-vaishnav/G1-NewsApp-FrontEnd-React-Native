import apiClient from "./client";

//get all
const getALL = async () => {
  try {
    const response = await apiClient.get("/news");

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log("Error while getting all news ", error.message);
  }
};

//get by single post

const getSingle = async (id) => {
  try {
    const response = await apiClient.get(`/news/single/${id}`);

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log("Error while getting single news ", error.message);
  }
};

//get by category
const getByCategory = async (category, qty) => {
  const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`;

  try {
    const response = await apiClient.get(endpoint);

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log("Error while getting categories all news ", error.message);
  }
};

//Search Post
const searchPost = async (query) => {
  if (!query) return {};

  try {
    const res = await apiClient.post(`/news/search/${query}`);
    return res.data;
  } catch (error) {
    console.log("Error while searching - seachpost NewsAPI", error);
  }
};

export default {
  getALL,
  getByCategory,
  getSingle,
  searchPost,
};
