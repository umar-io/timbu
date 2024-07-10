import { FilterButton, filterItems, times , Carousel, cImg1, cImg2, cImg3} from ".";
import { useState } from "react";
const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);


  const toggleFiltersFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleSortByFilter = () => {
    setShowSort(!showSort);
  };

  const [items, setItems] = useState(filterItems)

  const removeItem = (indexToRemove) => {
    const updatedItems = [...items];
    updatedItems.splice(indexToRemove, 1);
    setItems(updatedItems); 
  };

  const images = [
    cImg1,
    cImg2,
    cImg3,
  ]

  return (
    <main>
      <div className="filterSystem">
        <FilterButton
          label="sort by"
          onClick={toggleSortByFilter}
          showSort={showSort}
        />
        <FilterButton
          label="filters"
          onClick={toggleFiltersFilter}
          showFilter={showFilter}
        />
      </div>
      <div className={`filter ${showFilter || showSort ? 'show' : ''}`}>
        <ul>
          {filterItems.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <span>
                <img src={times} alt="" onClick={()=>removeItem(index)} />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Carousel images={images}/>
    </main>
  );
};
export default App;
