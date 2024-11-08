import { Link } from "react-router-dom";
import "../assets/style/Header.css";

function Header() {
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

          <Link to="/profile">
            <img
              className="avatar-profile"
              src="../src/assets/images/avatar.png"
              alt="Profile Avatar"
            />
          </Link>
        </nav>
      </header>
    </>
  );
}
export default Header;
