import useUtils from '../useUtils';
const SearchBar = ({ onSearchInputChange }: any) => {
  // const { handleSearchInputChange, filteredData } = useUtils();
  // console.log('SEARCH BAR ', filteredData);
  return (
    <div className="searchBar">
      <div className="iconSearch positionAbso">
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          onChange={onSearchInputChange}
        />
        <div className="group145115">
          <div className="firstSubGroups145115 positionAbso">
            <div className="firstSubGroups145115 positionAbso">
              <div className="firstSubGroups145115 positionAbso searchStickVector gray1"></div>
            </div>
          </div>
          <div className="secSubGroups145115  positionAbso">
            <div className="secSubGroups145115">
              <div className="secSubGroups145115  circleVector"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <label className="searchText">Search</label> */}
    </div>
  );
};

export default SearchBar;
