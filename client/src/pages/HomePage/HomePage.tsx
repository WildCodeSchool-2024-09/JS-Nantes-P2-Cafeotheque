import HomeCards from "../../components/HomeCards";
import HomeNav from "../../components/HomeNav";
import LatestArrival from "../../components/LatestArrival";
import "./homepage.css";

function HomePage() {
  return (
    <main id="homepage-main-container">
      <HomeNav />
      <LatestArrival />
      <HomeCards />
    </main>
  );
}

export default HomePage;
