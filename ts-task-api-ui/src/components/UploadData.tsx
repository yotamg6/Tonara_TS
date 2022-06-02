import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import NewCard from './NewCard';
import { AssignmentInter } from '../interfaces';

interface FormProps {
  formValues: AssignmentInter;
}

const UploadData: React.FC<FormProps> = ({
  formValues: {
    title,
    description,
    music_genre,
    practice_time,
    days,
    days_practiced,
  },
}) => {
  const [uploadedData, setUploadedData] = useState<AssignmentInter>();
  const handleSubmit = async () => {
    try {
      axios
        .post<AssignmentInter>('http://localhost:5000/assignment', {
          title,
          description,
          music_genre,
          practice_time,
          days,
          days_practiced,
        })
        .then((response) => {
          setUploadedData(response.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleSubmit}>
        Send
      </Button>
      {uploadedData ? (
        <div>
          <NewCard assignment={uploadedData} />
        </div>
      ) : null}
    </>
  );
};

export default UploadData;
