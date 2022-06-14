import { useNavigate } from 'react-router-dom';
const AddBtn = () => {
  let navigate = useNavigate();

  return (
    <button className="addBtn" onClick={() => navigate('new-assignment')}>
      {/* <div className="union">
        <div className="line1"></div>
        <div className="line2"></div>
      </div> */}
    </button>
  );
};

export default AddBtn;
