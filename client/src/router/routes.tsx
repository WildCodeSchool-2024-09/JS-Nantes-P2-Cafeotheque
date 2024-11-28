import CoffeesLoader from "../loaders/CoffeesLoader";
import CoffeeDetailPage from "../pages/CoffeeDetailPage/CoffeeDetailPage";
import CoffeesPage from "../pages/CoffeesPage/CoffeesPage";
import HistoryOfCoffeePage from "../pages/HistoryPage/HistoryOfCoffeePage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RecipePage from "../pages/RecipePage/RecipePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import WorldCoffeePage from "../pages/WolrdCoffeePage/WorldCoffeePage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/coffees",
    element: <CoffeesPage />,
    loader: CoffeesLoader,
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
    element: <RecipePage />,
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
