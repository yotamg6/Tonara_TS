import rythemLogo from '../media/rythem.png';
import groupAssignmentIcon from '../media/groupAssignment.png';
import { AssignmentInter } from '../interfaces';
import Pdf from '../docs/doc.pdf';
// import CheckBox from './CheckBox';
// import { handleCheckBoxChange } from '../Utils';
import useUtils from '../useUtils';
import _ from 'lodash';

interface AssignmentProp {
  assignment: AssignmentInter;
  index: number;
  onCheckboxChange: (index: number) => (event: any) => void;
}

const Item: React.FC<AssignmentProp> = ({
  onCheckboxChange,
  assignment: {
    title,
    description,
    music_genre,
    practice_time,
    days,
    days_practiced,
    id,
  },
  index,
}) => {
  // console.log(id);
  const { returnedData, handleCheckBoxChange, setReturnedData } = useUtils();
  // console.log('render ', returnedData);
  const progress =
    days_practiced && days && days != 0 ? (days_practiced / days) * 254 : 0;
  const progressPercentage =
    days_practiced && days && days != 0
      ? Math.round((days_practiced / days) * 100)
      : 0;

  return (
    <>
      <div className="card">
        <div className="topCardContainer">
          <img className="rythemIcon" src={rythemLogo}></img>
          <div className="titlesGroup145234">
            <div className="title1">{title}</div>
            <div className="subTitle1">{music_genre}</div>
          </div>
          <a href={Pdf} target="_blank" className="pdfLink">
            PDF URL
          </a>
          <input
            type="checkbox"
            onChange={onCheckboxChange(index)}
            // onChange={(e) => {
            //   // const nextReturned = JSON.parse(JSON.stringify(returnedData));
            //   const nextReturned = _.cloneDeep(returnedData);
            //   nextReturned[index].isChecked = e.target.checked;
            //   setReturnedData(nextReturned);
            //   // handleCheckBoxChange(index, id, e)
            //   // setReturnedData((prevState: AssignmentInter[]) => [
            //   //   ...prevState,
            //   //   { isChecked: e.target.checked, id },
            //   // ]);
            // }}
          ></input>
          <div className="instructionGroup145345">
            <div className="textInstructions">
              {days} days / {practice_time} minutes per day
            </div>

            <img src={groupAssignmentIcon}></img>
          </div>
          <div className="progressGroup145346">
            <div className="innerProgGroup145242">
              <div
                className="progRectangle26"
                style={{
                  width: `${progress}px`,
                }}
              ></div>
            </div>
          </div>
          <div className="progPercentage">{progressPercentage}%</div>
        </div>
      </div>
    </>
  );
};

export default Item;
