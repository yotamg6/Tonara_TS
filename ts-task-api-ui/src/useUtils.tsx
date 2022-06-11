import axios from 'axios';
import { AssignmentInter } from './interfaces';
import React, { useState, useEffect } from 'react';
import { ISelectedItem } from './interfaces';
import _ from 'lodash';

const useUtils = () => {
  const [returnedData, setReturnedData] = useState<AssignmentInter[]>([]);
  const [inputs, setInputs] = useState<AssignmentInter>({});
  const [filteredData, setFilteredData] = useState<AssignmentInter[]>([]);
  // const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    function getAllAssignments(): void {
      try {
        axios
          .get<AssignmentInter[]>('http://localhost:5000/all-assignments')
          .then((response) => {
            setReturnedData(response.data);
            setFilteredData(response.data);
          });
      } catch (e) {
        console.log(e);
      }
    }
    getAllAssignments();
  }, []);

  const uploadData = async ({
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

  const handleFormInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const handleSearchInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleSearchInputChange');
    console.log('returnedData', returnedData?.length);
    console.log('value ', value);
    if (!value.length) {
      setFilteredData(returnedData);
      return;
    }
    const searchResults = returnedData.filter((data) => {
      const title = data.title;
      if (title) {
        const regexInput = new RegExp('^' + value, 'i');
        return regexInput.test(title);
      }
    });
    console.log('searchResults', searchResults);
    setFilteredData(searchResults);
  };

  const handleCheckBoxChange = (index: number, isChecked: boolean) => {
    console.log('handleCheckBoxChange');
    console.log('returnedData', returnedData?.length);
    const nextReturned = _.cloneDeep(returnedData);
    nextReturned[index].isChecked = isChecked;
    setReturnedData(nextReturned);
  };

  // useEffect(() => {
  // console.log('returnedData', returnedData);
  // console.log('assignments', assignments);
  // setAssignments(returnedData);
  // }, [returnedData]);

  const deleteSelectedItems = () => {
    // console.log(returnedData);
  };
  return {
    uploadData,
    filteredData,
    handleFormInputChange,
    inputs,
    handleSearchInputChange,
    handleCheckBoxChange,
    deleteSelectedItems,
    returnedData,
    setReturnedData,
  };
};
export default useUtils;

// const [selectedItems, setSelectedItems] = useState<ISelectedItem[]>([
//   { isChecked: true, id: 0 },
// ]);

// setSelectedItems((prevState: ISelectedItem[]) => [
//   ...prevState,
//   { isChecked: e.target.checked, id },
// ]);
/////////from delete fun/////////
// const selected = selectedItems.filter((item, i) => {
//   return item.isChecked === true;
// });
// console.log('selected', selected);
