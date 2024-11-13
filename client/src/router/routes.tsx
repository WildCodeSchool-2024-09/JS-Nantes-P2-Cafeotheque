import CoffeeDetailPage from "../pages/CoffeeDetailPage";
import CoffeesPage from "../pages/CoffeesPage";
import HistoryOfCoffeePage from "../pages/HistoryPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RecipeePage from "../pages/RecipeePage/RecipeePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import WorldCoffeePage from "../pages/WorldCoffeePage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/coffees",
    element: <CoffeesPage />,
  },
  {
    path: "/coffee/:id",
    element: <CoffeeDetailPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/recipes",
    element: <RecipeePage />,
  },
  {
    path: "/world-coffees",
    element: <WorldCoffeePage />,
  },
  {
    path: "/the-history-of-coffee",
    element: <HistoryOfCoffeePage />,
  },
];

export default routes;