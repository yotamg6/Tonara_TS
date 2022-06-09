import axios from 'axios';
import { AssignmentInter } from './interfaces';
import React, { useState, useEffect } from 'react';

// interface FormValues {
//   formValues: AssignmentInter;
// }

// export const uploadData = ({
//   formValues: {
//     title,
//     description,
//     music_genre,
//     practice_time,
//     days,
//     days_practiced,
//   },
// }: FormValues) => {
const useUtils = () => {
  const [isChecked, setIsChecked] = useState(false);
  const uploadData = ({
    formValues: {
      title,
      description,
      music_genre,
      practice_time,
      days,
      days_practiced,
    },
  }: {
    formValues: AssignmentInter;
  }) => {
    const handleSubmit = async () => {
      try {
        const { data } = await axios.post<AssignmentInter>(
          'http://localhost:5000/assignment',
          {
            title,
            description,
            music_genre,
            practice_time,
            days,
            days_practiced,
          }
        );
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    return handleSubmit();
  };

  const handleCheckBoxChange = (
    id: number | undefined,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.checked);
    console.log(id);
  };
  return {
    uploadData,
    handleCheckBoxChange,
  };
};
export default useUtils;

// export const uploadData = ({
//   formValues: {
//     title,
//     description,
//     music_genre,
//     practice_time,
//     days,
//     days_practiced,
//   },
// }: {
//   formValues: AssignmentInter;
// }) => {
//   const handleSubmit = async () => {
//     try {
//       const { data } = await axios.post<AssignmentInter>(
//         'http://localhost:5000/assignment',
//         {
//           title,
//           description,
//           music_genre,
//           practice_time,
//           days,
//           days_practiced,
//         }
//       );
//       // .then((response) => {
//       //   return response.data;
//       // });
//       return data;
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return handleSubmit();
// };

// // export const deleteItem = () => {

// //   };
// // };

// export const useHandleCheckBoxChange = (
//   id: number | undefined,
//   e: React.ChangeEvent<HTMLInputElement>
// ) => {
//   console.log(e.target.checked);
//   console.log(id);
// };
