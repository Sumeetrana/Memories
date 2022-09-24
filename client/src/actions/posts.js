import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = api.fetchPosts();
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