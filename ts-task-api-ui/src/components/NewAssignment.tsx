import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material';
import { AssignmentInter } from '../interfaces';
import useUtils from '../useUtils';

const NewAssignment = () => {
  let navigate = useNavigate();
  const { uploadData, handleFormInputChange, inputs } = useUtils();

  return (
    <>
      <div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <h1>New Assignment</h1>
          <div>
            <TextField
              label="Title"
              name="title"
              maxRows={1}
              variant="outlined"
              value={inputs.title || ''}
              onChange={handleFormInputChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Description"
              name="description"
              maxRows={1}
              variant="outlined"
              value={inputs.description || ''}
              onChange={handleFormInputChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Music Genre"
              name="music_genre"
              maxRows={1}
              variant="outlined"
              value={inputs.music_genre || ''}
              onChange={handleFormInputChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Daily Practice Time"
              name="practice_time"
              maxRows={1}
              variant="outlined"
              value={inputs.practice_time || ''}
              onChange={handleFormInputChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Days"
              name="days"
              maxRows={1}
              variant="outlined"
              value={inputs.days || ''}
              onChange={handleFormInputChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Days Practiced"
              name="days_practiced"
              maxRows={1}
              variant="outlined"
              value={inputs.days_practiced || ''}
              onChange={handleFormInputChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
          </div>
        </Box>
      </div>
      <br />
      <Button onClick={() => uploadData({ formValues: inputs })}>Send</Button>
      <Button onClick={() => navigate('/')}>Back to list</Button>
    </>
  );
};

export default NewAssignment;
