import { SearchNormal1 } from "iconsax-react";

const SearchBox = () => {
  return (
    <div className="right__search-box">
      <div className="search-field">
        <input type="text" className="search" placeholder="Search" />{" "}
        <button className="search-icon">
          <SearchNormal1 />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
