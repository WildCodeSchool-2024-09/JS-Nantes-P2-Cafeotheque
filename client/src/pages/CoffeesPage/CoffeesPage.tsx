import { useLoaderData } from "react-router-dom";
import FilteredList from "../../components/FilteredList";
import ListCoffees from "../../components/ListCoffees";
import "./CoffeesPage.css";
import { useEffect, useState } from "react";
import type { DataModel, FiltersStateType } from "../../types/FilteredList";

function CoffeesPage() {
  const [fullData] = useState<DataModel[]>(useLoaderData() as DataModel[]);
  const [currentData, setCurrentData] = useState<DataModel[]>(fullData);
  const [filters, setFilters] = useState<FiltersStateType>({
    continent: { isActive: false, filters: [] },
    country: { isActive: false, filters: [] },
    profile: { isActive: false, filters: [] },
  });

  useEffect(() => {
    let newData = fullData;
    // Loop for each key of filters
    for (const key of Object.keys(filters) as (keyof FiltersStateType)[]) {
      // If the filter isActive we filter our data
      if (filters[key].isActive && filters[key].filters.length)
        newData = newData.filter((el) =>
          filters[key].filters.includes(el[key]),
        );
    }
    newData;
    setCurrentData(newData);
  }, [filters, fullData]);

  return (
    <>
      <main className="container-central-coffeespages">
        <FilteredList
          filters={filters}
          setFilters={setFilters}
          data={fullData}
        />
        <ListCoffees data={currentData} />
      </main>
    </>
  );
}

export default CoffeesPage;
