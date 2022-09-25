import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@material-ui/core';

import useStyles from './style';
import { createNewMemoryPost } from '../../actions/posts';

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })

  const dispatch = useDispatch();

  const onCreateMemoryFormSubmit = (e) => {
    e.preventDefault();
    // console.log("PostData: ", postData);
    dispatch(createNewMemoryPost(postData));
  }

  const onClearForm = () => {

  }

  return (
    <Paper>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={onCreateMemoryFormSubmit}>
        <Typography variant="h6">Create a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        {/* File Uploader */}
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>

        {/* Submit Button */}
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        {/* Clear Button */}
        <Button
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
          onClick={onClearForm}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;