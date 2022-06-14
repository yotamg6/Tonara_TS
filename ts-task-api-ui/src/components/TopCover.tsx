import MenuBtn from './MenuBtn';
import { useNavigate } from 'react-router-dom';

const TopCover = () => {
  let navigate = useNavigate();
  return (
    // <div className="topCoverCont">
    <div className="topCover">
      <button className="addBtn" onClick={() => navigate('new-assignment')}>
        <div className="union">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </button>
      <img className="teacherImage"></img>

      <div className="menuBtn">
        <div className="menuVector">
          <div className="menuVectorLines"></div>
          <div className="menuVectorLines"></div>
          <div className="menuVectorLines"></div>
        </div>
      </div>
      {/* <MenuBtn /> */}
      {/* </div> */}
    </div>
  );
};

export default TopCover;
