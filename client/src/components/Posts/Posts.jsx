import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

import Post from './Post/Post';

const Posts = ({ setPostId }) => {
  const posts = useSelector(state => state.posts);

  return (
    posts.length === 0 ? <CircularProgress /> : (
      <Grid>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6}>
            <Post post={post} setPostId={setPostId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;