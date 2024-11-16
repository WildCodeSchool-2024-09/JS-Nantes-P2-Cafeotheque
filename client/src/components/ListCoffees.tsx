import "../pages/CoffeesPage/ListCoffees.css";
import { useEffect, useState } from "react";
import type { DataModel } from "../types/FilteredList";
import "../pages/CoffeesPage/ListCoffees.css";

function ListCoffees() {
  const [data, setData] = useState<DataModel[]>([]);
  const [newData, setNewData] = useState<DataModel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:4000/api/coffee")
      .then((response) => response.json())
      .then((result) => {
        //  filter the number of elements
        setData(result);
        setNewData(result.slice(0, 9));
      });
  }, []);

  // Event next page
  const handlePageChange = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setNewData(data.slice((nextPage - 1) * 9, nextPage * 9));
  };
  // Event previous page
  const handlePageChange2 = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    setNewData(data.slice((prevPage - 1) * 9, prevPage * 9));
  };
  window.scrollTo({
    top: 0,
  });

  return (
    <>
      <main className="container-cards-list">
        {newData.map((el) => {
          return (
            <section id="card-list" key={el.id}>
              <h3>{el.name}</h3>
              <h4>{el.profile}</h4>
              <h5>{el.country}</h5>
            </section>
          );
        })}
        <section className="container-button-listCoffees">
          <button
            disabled={currentPage <= 1}
            onClick={handlePageChange2}
            type="button"
          >
            précédent
          </button>
          <p>{currentPage}</p>
          <button
            disabled={currentPage >= 7}
            onClick={handlePageChange}
            type="button"
          >
            suivant
          </button>
        </section>
      </main>
    </>
  );
}
export default ListCoffees;
