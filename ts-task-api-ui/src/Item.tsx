import rythemLogo from '../media/rythem.png';

import groupAssignmentIcon from '../media/groupAssignment.png';

interface AssignmentProp {
  title: string;
  description: string;
  music_genre: string;
  practice_time: string;
  days: number;
  days_practiced: number;
}

// interface AssignmentProp {
//   assignment: TResponse;
// }

const Item: React.FC<AssignmentProp> = ({
  title,
  description,
  music_genre,
  practice_time,
  days,
  days_practiced,
}) => {
  const progress = (days_practiced / days) * 254;
  const progressPercentage = Math.round((days_practiced / days) * 100);

  return (
    <>
      <div className="card">
        <div className="topCardContainer">
          <img className="rythemIcon" src={rythemLogo}></img>
          <div className="titlesGroup145234">
            <div className="title1">{title}</div>
            <div className="subTitle1">{music_genre}</div>
          </div>

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
