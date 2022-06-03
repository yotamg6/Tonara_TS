const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="iconSearch positionAbso">
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
      <label className="searchText">Search</label>
      <input type="text" style={{ border: 'none' }} />
    </div>
  );
};

export default SearchBar;
