import TopCover from './TopCover';
import SearchBar from './SearchBar';
import AssignmentList from './AssignmentList';
import AddBtn from './AddBtn';
import useUtils from '../useUtils';

const CoursePage = () => {
  const {
    handleCheckBoxChange,
    filteredData,
    handleSearchInputChange,
    deleteSelectedItems,
  } = useUtils();
  return (
    <div className="container">
      <div className="coursePage">
        <AddBtn />
        <img className="teacherImage"></img>
        <TopCover />
        <button onClick={deleteSelectedItems}>Delete selected</button>
        <SearchBar onSearchInputChange={handleSearchInputChange} />
        <AssignmentList
          onCheckBoxChange={handleCheckBoxChange}
          data={filteredData}
        />
      </div>
    </div>
  );
};

export default CoursePage;
