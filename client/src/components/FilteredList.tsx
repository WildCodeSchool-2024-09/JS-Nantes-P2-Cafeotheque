import "../pages/CoffeesPage/FilteredList.css";
import type {
  DataModel,
  FilteredListProps,
  FiltersStateType,
} from "../types/FilteredList";

function FilteredList({ filters, setFilters, data }: FilteredListProps) {
  const handleClick = (el: React.MouseEvent<HTMLInputElement>) => {
    const target = el.target as HTMLInputElement;
    const id = target.id as keyof FiltersStateType;
    setFilters((prevValues) => ({
      ...prevValues,
      [id]: {
        isActive: !prevValues[id].isActive,
        filters: prevValues[id].filters,
      },
    }));
  };

  const handleClickSub = (el: React.MouseEvent<HTMLInputElement>) => {
    const target = el.target as HTMLInputElement;
    const clickedFilterName = target.name;
    const filterType = target.dataset.filtertype as keyof FiltersStateType;
    setFilters((prevValues) => {
      // Create a copy of the current state so we can set it after
      const filtersCopy = [...prevValues[filterType].filters];
      // check if the subfilter is already active so we can substract it
      if (filtersCopy.includes(clickedFilterName)) {
        // delete the subfilter
        const newFilters = filtersCopy.filter((el) => el !== clickedFilterName);
        // and return the new object
        return {
          ...prevValues,
          [filterType]: {
            isActive: prevValues[filterType].isActive,
            filters: newFilters,
          },
        };
      }
      // else we simply add it
      return {
        ...prevValues,
        [filterType]: {
          isActive: prevValues[filterType].isActive,
          // with this next line
          filters: [...filtersCopy, clickedFilterName],
        },
      };
    });
  };

  function getDifferentElement(key: keyof DataModel) {
    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (newArray.indexOf(data[i][key].toString()) === -1) {
        newArray.push(data[i][key].toString());
      }
    }
    return newArray;
  }

  return (
    <ul className="filters-container">
      {/* List main filters */}
      {Object.keys(filters).map((filterName) => {
        return (
          <>
            <li key={filterName}>
              <input
                className="pointer"
                onClick={handleClick}
                onChange={() => {}}
                type="checkbox"
                id={filterName}
                name={filterName}
                checked={filters[filterName as keyof FiltersStateType].isActive}
              />
              <label className="pointer" htmlFor={filterName}>
                {filterName}
              </label>
            </li>
            {/* List sub-filters if main is checked */}
            {filters[filterName as keyof FiltersStateType].isActive && (
              <ul className="list-filter">
                {getDifferentElement(filterName as keyof DataModel).map(
                  (el) => {
                    return (
                      <li key={`${el}-porte`}>
                        <input
                          className="pointer"
                          data-filtertype={filterName}
                          key={el}
                          type="checkbox"
                          onClick={handleClickSub}
                          name={el}
                        />
                        <label key={`${el}-label`} htmlFor={el}>
                          {el}
                        </label>
                      </li>
                    );
                  },
                )}
              </ul>
            )}
          </>
        );
      })}
    </ul>
  );
}

export default FilteredList;
