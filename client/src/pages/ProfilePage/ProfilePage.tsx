import { useEffect, useState } from "react";
import ListItems from "../../components/ListItems";
import type { DataModel } from "../../models/index";
import "./ProfilePage.css";
import { Link, Navigate } from "react-router-dom";
import FilteredList from "../../components/FilteredList";
import type { FiltersStateType } from "../../types/FilteredList";
import { useAuth } from "../../utils/context/AuthContext";

function ProfilePage() {
  const [anyLiked, setAnyLiked] = useState<boolean>(true);
  const [fullData, setfullData] = useState<DataModel[]>([]);
  const [currentData, setCurrentData] = useState<DataModel[]>([]);
  const [filters, setFilters] = useState<FiltersStateType>({
    continent: { isActive: false, filters: [] },
    country: { isActive: false, filters: [] },
    profile: { isActive: false, filters: [] },
  });

  const { loggedIn, userData } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/coffee");
      const fullData = await response.json();
      const filteredData = filterLikedData(fullData);
      setfullData(filteredData);
      setCurrentData(filteredData);
      if (!filteredData.length) setAnyLiked(false);
    };
    fetchData();
  }, []);

  function filterLikedData(fullData: DataModel[]) {
    if (!userData) return [];
    const filteredData: DataModel[] = [];
    const likedArray = userData.likedCoffees || [];

    for (const el of fullData) {
      if (likedArray.indexOf(el.id) !== -1) filteredData.push(el);
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
    setCurrentData(newData);
  }, [filters, fullData]);

  if (!loggedIn)
    return (
      <Navigate
        to="/login"
        state={{
          message: "Vous devez être connecté pour accéder à cette page",
        }}
      />
    );
  if (!anyLiked)
    return (
      <main id="no-item-profile-container">
        <p>
          Aucun article aimé pour le moment pour y remedier c'est{" "}
          <Link id="jumpy-link" to="/coffees">
            par ici !
          </Link>
        </p>
      </main>
    );
  return (
    <main id="profile-page-main-container">
      <FilteredList filters={filters} setFilters={setFilters} data={fullData} />
      <ListItems data={currentData} />
    </main>
  );
}

export default ProfilePage;
