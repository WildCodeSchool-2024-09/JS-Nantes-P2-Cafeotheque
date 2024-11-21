import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/style/Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleDisconnect() {
    localStorage.removeItem("connected-user");
    navigate("/login");
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img
              className="logo-coffee"
              src="../src/assets/images/logo-coffee.png"
              alt="Logo Coffee"
            />
          </Link>

          <p className="title-header">Caféothèque</p>
          {location.pathname === "/profile" ? (
            <img
              className="avatar-profile pointer"
              alt="disconnect waving hand"
              src="https://www.svgrepo.com/show/387056/bye.svg"
              onClick={handleDisconnect}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleDisconnect;
              }}
            />
          ) : (
            <Link to="/profile">
              <img
                className="avatar-profile"
                src="../src/assets/images/avatar.png"
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
