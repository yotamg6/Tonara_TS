import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material';
import { AssignmentInter } from '../interfaces';
// import UploadData from './UploadData';
// import { uploadData } from '../useUtils';
import useUtils from '../useUtils';

const NewAssignment = () => {
  let navigate = useNavigate();
  const { uploadData } = useUtils();

  const [inputs, setInputs] = useState<AssignmentInter>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setInputs((prevState: AssignmentInter) => {
    // let isValid = true;
    // if (e.target.name === 'days') {
    //   isValid = /[0-9]/
    // }
    // if (!isValid) {
    //   return;
    // }
    // const a: AssignmentInter = {
    //   ...prevState,
    //   days: e.target.value,
    // };
    // return a;
    // });

    if (
      e.target.name === 'days' ||
      e.target.name === 'practice_time' ||
      e.target.name === 'days_practiced'
    ) {
      let allowedChar = /^[0-9\b]+$/;
      if (e.target.value === '' || allowedChar.test(e.target.value)) {
        setInputs((prevState: AssignmentInter) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      } else return;
    } else {
      setInputs((prevState: AssignmentInter) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

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
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Description"
              name="description"
              maxRows={1}
              variant="outlined"
              value={inputs.description || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Music Genre"
              name="music_genre"
              maxRows={1}
              variant="outlined"
              value={inputs.music_genre || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Daily Practice Time"
              name="practice_time"
              maxRows={1}
              variant="outlined"
              value={inputs.practice_time || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Days"
              name="days"
              maxRows={1}
              variant="outlined"
              value={inputs.days || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Days Practiced"
              name="days_practiced"
              maxRows={1}
              variant="outlined"
              value={inputs.days_practiced || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
          </div>
        </Box>
      </div>

      {/* <UploadData formValues={inputs} /> */}

      <br />
      <Button onClick={() => uploadData({ formValues: inputs })}>Send</Button>
      <Button onClick={() => navigate('/')}>Back to list</Button>
    </>
  );
};

export default NewAssignment;
