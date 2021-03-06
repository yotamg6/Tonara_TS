import { useMemo } from 'react';
import rythemLogo from '../media/rythem.png';
import groupAssignmentIcon from '../media/groupAssignment.png';
import { AssignmentInter } from '../interfaces';
import Pdf from '../docs/doc.pdf';
import _ from 'lodash';

interface AssignmentProp {
  assignment: AssignmentInter;
  index: number;
  onCheckboxChange: (index: number) => (event: any) => void;
}

const Item: React.FC<AssignmentProp> = ({
  onCheckboxChange,
  assignment: { title, music_genre, practice_time, days, days_practiced },
  index,
}) => {
  const calcProgres = (days: any, days_practiced: any) => {
    const progress =
      days_practiced && days && days != 0 ? (days_practiced / days) * 254 : 0;
    return progress;
  };

  const calcProgresPercentage = (days: any, days_practiced: any) => {
    const progressPercentage =
      days_practiced && days && days != 0
        ? Math.round((days_practiced / days) * 100)
        : 0;
    return progressPercentage;
  };

  const progress = useMemo(
    () => calcProgres(days, days_practiced),
    [days, days_practiced]
  );

  const progressPercentage = useMemo(
    () => calcProgresPercentage(days, days_practiced),
    [days, days_practiced]
  );

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
          <input type="checkbox" onChange={onCheckboxChange(index)}></input>
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
