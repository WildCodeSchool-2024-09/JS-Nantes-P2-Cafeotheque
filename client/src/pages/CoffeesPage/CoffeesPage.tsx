import { useLoaderData } from "react-router-dom";
import FilteredList from "../../components/FilteredList";
import ListCoffees from "../../components/ListCoffees";
import "./CoffeesPage.css";
import { /*useEffect, */ useState } from "react";
import type { DataModel, FiltersStateType } from "../../types/FilteredList";

function CoffeesPage() {
  const [fullData] = useState<DataModel[]>(useLoaderData() as DataModel[]);
  const [filters, setFilters] = useState<FiltersStateType>({
    continent: { isActive: false, filters: [] },
    country: { isActive: false, filters: [] },
    profile: { isActive: false, filters: [] },
  });

  // Leave this to further implement filtering of data
  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

  return (
    <>
      <main className="container-central-coffeespages">
        <FilteredList
          filters={filters}
          setFilters={setFilters}
          data={fullData}
        />
        <ListCoffees />
      </main>
    </>
  );
}

export default CoffeesPage;
