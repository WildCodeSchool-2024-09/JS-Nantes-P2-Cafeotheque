import ListItems from "../../components/ListItems";
import data from "../../mocks/apiMock.json";
import "./ProfilePage.css";

function ProfilePage() {
  // Replace div filters with filters component
  return (
    <main id="profile-page-main-container">
      <div id="filters" />
      <ListItems data={data} />
    </main>
  );
}

export default ProfilePage;
