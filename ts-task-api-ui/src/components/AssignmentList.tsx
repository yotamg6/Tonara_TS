import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import { AssignmentInter } from '../interfaces';

// interface Response {
//   title: string;
//   description: string;
//   music_genre: string;
//   practice_time: string;
//   days: number;
//   days_practiced: number;
// }

const AssignmentList: React.FC = () => {
  const [returnedData, setReturnedData] = useState<AssignmentInter[]>([]);

  useEffect(() => {
    function getAllAssignments(): void {
      try {
        axios
          .get<AssignmentInter[]>('http://localhost:5000/all-assignments')
          .then((response) => {
            console.log(response.data);
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
