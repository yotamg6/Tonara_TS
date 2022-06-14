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
          {/* <SearchIcon></SearchIcon> */}
          {/* <div className="firstSubGroups145115 ">
            <div className="firstSubGroups145115 ">
              <div className="firstSubGroups145115  searchStickVector gray1"></div>
            </div>
          </div>
          <div className="secSubGroups145115  positionAbso">
            <div className="secSubGroups145115">
              <div className="secSubGroups145115  circleVector"></div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
