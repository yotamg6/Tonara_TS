import Item from './Item';

const AssignmentList = ({ onCheckBoxChange, data }: any) => {
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
                key={assignment.id}
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
