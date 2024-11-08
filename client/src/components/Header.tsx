import "./assets/style/Header.css";

function Header() {
  return (
    <>
      <header>
        <nav>
          <a href="./pages/HomePage.tsx">
            <img src="./images/logo-coffee.png" alt="Logo Coffee" />
          </a>
          <h1>Caféothèque</h1>
        </nav>
        <a href="./pages/ProfilePage.tsx">
          <img src="./images/avatar.png" alt="Profile Avatar" />
        </a>
      </header>
    </>
  );
}
export default Header;
