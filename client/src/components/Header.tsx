import "../assets/style/Header.css";

function Header() {
  return (
    <>
      <body>
        <header>
          <nav>
            <a href="../src/pages/HomePage.tsx">
              <img
                className="logo-coffee"
                src="../src/assets/images/logo-coffee.png"
                alt="Logo Coffee"
              />
            </a>

            <h1>Caféothèque</h1>

            <a href="./pages/ProfilePage.tsx">
              <img
                className="avatar-profile"
                src="../src/assets/images/avatar.png"
                alt="Profile Avatar"
              />
            </a>
          </nav>
        </header>
      </body>
    </>
  );
}
export default Header;
