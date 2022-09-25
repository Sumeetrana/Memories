import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: "FETCH_ALL", payload: data }

    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
}

export const createNewMemoryPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createNewMemoryPost(post);

    dispatch({ type: 'CREATE', payload: data })
  } catch (error) {
    console.log(error);
  }
}

export const updateMemoryPost = (postId, updatedPost) => async (dispatch) => {
  try {
    console.log("Action: ", postId);
    // const data = await api.updateMemoryPost(postId, updatedPost);
    api.updateMemoryPost(postId, updatedPost).then(response => {
      console.log("Response: ", response);
    })
    // console.log("Action Data: ", data);
    // dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.log(error);
  }
}