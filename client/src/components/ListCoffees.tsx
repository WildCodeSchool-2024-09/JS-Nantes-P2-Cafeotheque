import { useEffect, useState } from "react";
import type { DataModel } from "../types/FilteredList";
import "../pages/CoffeesPage/ListCoffees.css";
import { Link } from "react-router-dom";

function ListCoffees({ data }: { data: DataModel[] }) {
  const [newData, setNewData] = useState<DataModel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    //  filter the number of elements
    setNewData(data.slice(0, 9));
  }, [data]);

  // Event next page
  const handlePageChange = (sign: number) => {
    const nextPage = currentPage + sign;
    setCurrentPage(nextPage);
    setNewData(data.slice((nextPage - 1) * 9, nextPage * 9));
  };
  window.scrollTo({
    top: 0,
  });

  return (
    <>
      <section id="container-cards-list">
        {newData.map((el) => {
          return (
            <Link
              className="list-coffee-item-container"
              key={el.id}
              to={`/coffee/${el.id}`}
            >
              <img
                alt={el.name}
                src={
                  el.imgSrc
                    ? el.imgSrc
                    : "https://www.svgrepo.com/show/513896/coffee-cup-tea.svg"
                }
              />
              <h3>{el.name}</h3>
              <h4>{el.profile}</h4>
              <h5>{el.country}</h5>
            </Link>
          );
        })}
        <section className="container-button-listCoffees">
          <button
            disabled={currentPage <= 1}
            onClick={() => handlePageChange(-1)}
            type="button"
          >
            précédent
          </button>
          <p>{currentPage}</p>
          <button
            disabled={currentPage >= 7}
            onClick={() => handlePageChange(1)}
            type="button"
          >
            suivant
          </button>
        </section>
      </section>
    </>
  );
}
export default ListCoffees;
