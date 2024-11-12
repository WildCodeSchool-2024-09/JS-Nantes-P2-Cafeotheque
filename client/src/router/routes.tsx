import HomePage from "../pages/HomePage";
import CoffeesPage from "../pages/CoffeesPage";
import CoffeeDetailPage from "../pages/CoffeeDetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import RecipeePage from "../pages/RecipeePage";
import WorldCoffeePage from "../pages/WorldCoffeePage";
import HistoryOfCoffeePage from "../pages/HistoryPage";

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
