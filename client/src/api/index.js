import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createNewMemoryPost = (newMemoryPost) => axios.post(url, newMemoryPost);

export const updateMemoryPost = (id, updatedPost) => {
  axios.patch(`${url}/${id}`, updatedPost)
};