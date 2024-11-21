import { useEffect, useState } from "react";
import ListItems from "../../components/ListItems";
import type { DataModel } from "../../models/index";
import "./ProfilePage.css";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils/context/AuthContext";

function ProfilePage() {
  const [data, setData] = useState<DataModel[]>([]);

  const { loggedIn, userData } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/coffee");
      const fullData = await response.json();
      const filteredData = filterData(fullData);
      setData(filteredData);
    };
    fetchData();
  }, []);

  function filterData(fullData: DataModel[]) {
    if (!userData) return [];
    const filteredData: DataModel[] = [];
    const likedArray = userData.likedCoffees || [];

    for (const el of fullData) {
      if (likedArray.indexOf(el.id) !== -1) filteredData.push(el);
    }
    return filteredData;
  }

  // Replace div filters with filters component
  if (!loggedIn) return <Navigate to="/login" />;
  return (
    <main id="profile-page-main-container">
      <div id="filters" />
      <ListItems data={data} />
    </main>
  );
}

export default ProfilePage;
