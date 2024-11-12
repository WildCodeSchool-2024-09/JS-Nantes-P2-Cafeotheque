import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import "./assets/globals.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
