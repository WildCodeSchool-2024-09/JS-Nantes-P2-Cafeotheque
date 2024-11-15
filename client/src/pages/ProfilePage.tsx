import { Navigate } from "react-router-dom";

function ProfilePage() {
  if (!localStorage.getItem("connected-user")) return <Navigate to="/login" />;
  return <></>;
}

export default ProfilePage;
