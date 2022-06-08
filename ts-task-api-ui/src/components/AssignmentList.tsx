import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import { AssignmentInter } from '../interfaces';

const AssignmentList: React.FC = () => {
  const [returnedData, setReturnedData] = useState<AssignmentInter[]>([]);

  useEffect(() => {
    function getAllAssignments(): void {
      try {
        axios
          .get<AssignmentInter[]>('http://localhost:5000/all-assignments')
          .then((response) => {
            setReturnedData(response.data);
          });
      } catch (e) {
        console.log(e);
      }
    }
    getAllAssignments();
    
  }, []);
  return (
    <div className="list">
      {returnedData.length
        ? returnedData.map((assignment, i): JSX.Element => {
            return <Item key={i} assignment={assignment} />;
          })
        : null}
    </div>
  );
};

export default AssignmentList;
