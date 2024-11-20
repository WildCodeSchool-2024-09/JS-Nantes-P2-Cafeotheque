import FilteredList from "../../components/FilteredList";
import ListCoffees from "../../components/ListCoffees";
import "./CoffeesPage.css";

function CoffeesPage() {
  return (
    <>
      <main className="container-central-coffeespages">
        <FilteredList />
        <ListCoffees />
      </main>
    </>
  );
}

export default CoffeesPage;
