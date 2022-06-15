import SearchIcon from '@mui/icons-material/Search';
const SearchBar = ({ onSearchInputChange }: any) => {
  return (
    <div className="searchBar">
      <div className="iconSearch">
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          onChange={onSearchInputChange}
        />
        <div className="group145115">
          <SearchIcon></SearchIcon>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
