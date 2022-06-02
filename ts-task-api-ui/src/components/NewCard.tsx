import { Card, CardContent, Typography } from '@mui/material';
import { AssignmentInter } from '../interfaces';

interface NewCardProps {
  assignment: AssignmentInter;
}

const NewCard: React.FC<NewCardProps> = ({ assignment }) => {
  return (
    <>
      <Card className="card">
        <CardContent>
          <Typography sx={{ fontSize: 15 }} component="div">
            Title: {assignment.title}
          </Typography>
          <Typography sx={{ fontSize: 15 }} component="div">
            Description: {assignment.description}
          </Typography>
          <Typography sx={{ fontSize: 15 }} component="div">
            Music Genre: {assignment.music_genre}
          </Typography>
          <Typography sx={{ fontSize: 15 }} component="div">
            Practice Time: {assignment.practice_time}
          </Typography>
          <Typography sx={{ fontSize: 15 }} component="div">
            Days: {assignment.days}
          </Typography>
          <Typography sx={{ fontSize: 15 }} component="div">
            Days Practiced: {assignment.days_practiced}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default NewCard;
