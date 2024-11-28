import "../pages/CoffeesPage/FilteredList.css";
import React from "react";
import type {
  DataModel,
  FilteredListProps,
  FiltersStateType,
} from "../types/FilteredList";

function FilteredList({ filters, setFilters, data }: FilteredListProps) {
  const handleClick = (el: React.ChangeEvent<HTMLInputElement>) => {
    const target = el.target as HTMLInputElement;
    const id = target.id as keyof FiltersStateType;
    setFilters((prevValues) => {
      return {
        ...prevValues,
        [id]: {
          isActive: !prevValues[id].isActive,
          filters: prevValues[id].filters,
        },
      };
    });
  };

  const handleClickSub = (el: React.ChangeEvent<HTMLInputElement>) => {
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
          <React.Fragment key={`filter-group-${filterName}`}>
            <li>
              <input
                className="pointer"
                onChange={handleClick}
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
              <ul key={`sub-filter-list-${filterName}`} className="list-filter">
                {getDifferentElement(filterName as keyof DataModel).map(
                  (el) => {
                    return (
                      <li key={`sub-filter-${filterName}-${el}`}>
                        <input
                          className="pointer"
                          data-filtertype={filterName}
                          type="checkbox"
                          onChange={handleClickSub}
                          checked={filters[
                            filterName as keyof FiltersStateType
                          ].filters.includes(el)}
                          name={el}
                        />
                        <label htmlFor={el}>{el}</label>
                      </li>
                    );
                  },
                )}
              </ul>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default FilteredList;
