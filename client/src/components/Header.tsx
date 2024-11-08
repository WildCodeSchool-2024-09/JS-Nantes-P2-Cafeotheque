import { Link } from "react-router-dom";
import "../assets/style/Header.css";

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="../src/pages/HomePage.tsx">
            <img
              className="logo-coffee"
              src="../src/assets/images/logo-coffee.png"
              alt="Logo Coffee"
            />
          </Link>

          <h1>Caféothèque</h1>

          <Link to="./pages/ProfilePage.tsx">
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
