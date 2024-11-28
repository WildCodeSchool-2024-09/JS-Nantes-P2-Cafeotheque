import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/context/AuthContext";
import "../assets/style/Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleLogin } = useAuth();

  function handleDisconnect() {
    localStorage.removeItem("connected-user");
    toggleLogin();
    navigate("/login");
  }
  return (
    <>
      <header className="header-component-container">
        <nav>
          <Link to="/">
            <img
              className="logo-coffee"
              src="../public/images/logo-coffee.png"
              alt="Logo Coffee"
            />
          </Link>
          <p className="title-header">Caféothèque</p>
          {location.pathname === "/profile" ? (
            <button onClick={handleDisconnect} type="button">
              <img
                className="avatar-profile pointer"
                alt="disconnect waving hand"
                src="https://www.svgrepo.com/show/387056/bye.svg"
              />
            </button>
          ) : (
            <Link to="/profile">
              <img
                className="avatar-profile"
                src="../public/images/avatar.png"
                alt="Profile Avatar"
              />
            </Link>
          )}
        </nav>
      </header>
    </>
  );
}
export default Header;
