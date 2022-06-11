import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import { AssignmentInter } from '../interfaces';
import useUtils from '../useUtils';

const AssignmentList = ({ onCheckBoxChange, data }: any) => {
  // const {
  //   returnedData,
  //   handleCheckBoxChange,
  //   filteredData,
  //   handleSearchInputChange,
  // } = useUtils();
  // console.log('RENDER AssignmentList ', filteredData);
  // const [searchValue, setSearchValue] = useState('');
  // console.log('render returendData', returnedData);
  // console.log('render assignments', assignments);
  const handleItemCheckboxChange =
    (index: number) =>
    ({ target: { checked } }: any) => {
      onCheckBoxChange(index, checked);
    };

  return (
    <div className="list">
      {data.length
        ? data.map((assignment: any, i: number): JSX.Element => {
            return (
              <Item
                key={i}
                assignment={assignment}
                index={i}
                onCheckboxChange={handleItemCheckboxChange}
              />
            );
          })
        : null}
    </div>
  );
};

export default AssignmentList;
