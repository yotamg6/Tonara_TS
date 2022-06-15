import TopCover from './TopCover';
import SearchBar from './SearchBar';
import AssignmentList from './AssignmentList';
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
        <TopCover />
      </div>
      <button
        style={{ position: 'absolute', top: '20%', left: '5.87%' }}
        onClick={deleteSelectedItems}
      >
        Delete selected
      </button>
      <SearchBar onSearchInputChange={handleSearchInputChange} />
      <AssignmentList
        onCheckBoxChange={handleCheckBoxChange}
        data={filteredData}
      />
    </div>
  );
};

export default CoursePage;
