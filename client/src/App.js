import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import useStyles from './styles';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';

const App = () => {
  const classes = useStyles();
  const [postId, setPostId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setPostId={setPostId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form postId={postId} setPostId={setPostId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;