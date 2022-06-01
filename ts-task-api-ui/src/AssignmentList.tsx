import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';

interface Response {
  title: string;
  description: string;
  music_genre: string;
  practice_time: string;
  days: string;
  days_practiced: string;
}

const AssignmentList: React.FC = () => {
  const [returnedData, setReturnedData] = useState<Response[]>([]);

  useEffect(() => {
    function getAllAssignments(): void {
      try {
        axios
          .get<Response[]>('http://localhost:5000/all-assignments')
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
        ? returnedData.map((assignment: Response, i: number) => {
            return <Item key={i} assignment={assignment} />;
          })
        : null}
    </div>
  );
};

export default AssignmentList;
