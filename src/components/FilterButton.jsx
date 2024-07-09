import { arrowDown } from "..";
const FilterButton = ({ label, onClick, showFilter , showSort }) => {

  return (
    <button onClick={onClick} className="filterButton">
      {label}{" "}
      <img
        src={arrowDown}
        alt=""
        className={`collapseImg ${showFilter || showSort ? "rotate" : ""}`}
      />
    </button>
  );
};
export default FilterButton;
