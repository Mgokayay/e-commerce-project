import img1 from "../assets/filter-icon1.svg";
import img2 from "../assets/filter-icon2.svg";

const FilterContainer = ({ searchTerm, onFilterChange, onSortChange }) => {
  return (
    <div className="flex px-[10%] py-6 items-center justify-between flex-col xl:flex-row gap-4 xl:gap-0">
      <h2 className="text-[#737373] text-sm font-bold">
        Showing all 12 results
      </h2>
      <div className="flex gap-4 justify-center xl:justify-start items-center">
        <p className="text-[#737373] text-sm font-bold">Views:</p>
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
      </div>
      <div className="flex flex-row gap-3">
        <div class="input-group" className="flex text-center items-center ">
          <input
            className="h-10"
            type="search"
            class="form-control rounded-md"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchTerm}
            onChange={(e) => onFilterChange(e.target.value)}
          />
          <button
            type="button"
            class="btn btn-outline-primary"
            data-mdb-ripple-init
          >
            search
          </button>
        </div>
        <div className=" flex flex-row font-normal text-sm border-light border-[#737373] rounded-md">
          <select
            name="filter"
            id="filter"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="Best to Worst">Best to Worst</option>
            <option value="Worst to Best">Worst to Best</option>
            <option value="Highest Price">Highest Price</option>
            <option value="Lowest Price">Lowest Price</option>
          </select>
        </div>
        <button className="text-white bg-[#23A6F0] py-[10px] px-10 rounded">
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterContainer;
