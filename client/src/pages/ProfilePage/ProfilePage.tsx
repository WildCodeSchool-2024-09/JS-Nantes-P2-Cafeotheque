import { useEffect, useState } from "react";
import ListItems from "../../components/ListItems";
import type { DataModel, UserModel } from "../../models/index";
import "./ProfilePage.css";
import { Navigate } from "react-router-dom";
import FilteredList from "../../components/FilteredList";
import type { FiltersStateType } from "../../types/FilteredList";

function ProfilePage() {
  const [fullData, setfullData] = useState<DataModel[]>([]);
  const [currentData, setCurrentData] = useState<DataModel[]>([]);
  const [filters, setFilters] = useState<FiltersStateType>({
    continent: { isActive: false, filters: [] },
    country: { isActive: false, filters: [] },
    profile: { isActive: false, filters: [] },
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/coffee");
      const fullData = await response.json();
      const filteredData = filterLikedData(fullData);
      setfullData(filteredData);
      setCurrentData(filteredData);
    };
    fetchData();
  }, []);

  function filterLikedData(fullData: DataModel[]) {
    const filteredData: DataModel[] = [];
    const likedArrayString = localStorage.getItem(
      "super-secured-database-users",
    );
    const userUsername = localStorage.getItem("connected-user");
    if (!likedArrayString) return [];
    const likedArrayJSON: UserModel = JSON.parse(likedArrayString);
    if (!likedArrayJSON || !userUsername) return [];

    for (const el of fullData) {
      if (likedArrayJSON[userUsername].likedCoffees.indexOf(el.id) !== -1)
        filteredData.push(el);
    }
    return filteredData;
  }

  // On filter change
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

  if (!localStorage.getItem("connected-user")) return <Navigate to="/login" />;
  return (
    <main id="profile-page-main-container">
      <FilteredList filters={filters} setFilters={setFilters} data={fullData} />
      <ListItems data={currentData} />
    </main>
  );
}

export default ProfilePage;
