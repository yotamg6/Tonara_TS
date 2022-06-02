import TopCover from './TopCover';
import SearchBar from './SearchBar';
import AssignmentList from './AssignmentList';
import AddBtn from './AddBtn';

const CoursePage = () => {
  return (
    <div className="container">
      <div className="coursePage">
        <AddBtn />
        <img className="teacherImage"></img>
        <TopCover />
        <SearchBar />
        <AssignmentList />
      </div>
    </div>
  );
};

export default CoursePage;
