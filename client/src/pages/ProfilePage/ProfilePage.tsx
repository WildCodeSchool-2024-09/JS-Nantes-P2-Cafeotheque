import { useEffect, useState } from "react";
import ListItems from "../../components/ListItems";
import type { DataModel, UserModel } from "../../models/index";
import "./ProfilePage.css";

function ProfilePage() {
  const [data, setData] = useState<DataModel[]>([]);

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

  // Replace div filters with filters component
  return (
    <main id="profile-page-main-container">
      <div id="filters" />
      <ListItems data={data} />
    </main>
  );
}

export default ProfilePage;
