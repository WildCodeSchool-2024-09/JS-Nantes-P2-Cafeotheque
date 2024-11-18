import "../assets/style/Pagination.css";
import type { PaginationProps } from "../types/pagination";

function Pagination({
  data,
  nbrOfElementsPerPage,
  setCurrentElem,
  setPage,
  page,
}: PaginationProps) {
  function handleClickPage(sign: string) {
    if (sign === "-" && page > 0) {
      setPage((currentPage) => currentPage - 1);
      setCurrentElem(
        data.slice(
          nbrOfElementsPerPage * (page - 1),
          nbrOfElementsPerPage * page,
        ),
      );
    }
    if (sign === "+" && data.length > nbrOfElementsPerPage * (page + 1)) {
      setPage((currentPage) => currentPage + 1);
      setCurrentElem(
        data.slice(
          nbrOfElementsPerPage * (page + 1),
          nbrOfElementsPerPage * (page + 2),
        ),
      );
    }
  }

  return (
    <div id="pagination-container">
      {page > 0 && (
        <button
          className="pointer"
          type="button"
          onClick={() => handleClickPage("-")}
        >
          <img
            alt="left-arrow precedent page"
            src="https://www.svgrepo.com/show/533593/arrow-left.svg"
          />
        </button>
      )}
      <p>
        {(data.length > nbrOfElementsPerPage * (page + 1) || page > 0) &&
          page + 1}
      </p>
      {data.length > nbrOfElementsPerPage * (page + 1) && (
        <button
          className="pointer"
          type="button"
          onClick={() => handleClickPage("+")}
        >
          <img
            alt="right-arrow next page"
            src="https://www.svgrepo.com/show/533610/arrow-right.svg"
          />
        </button>
      )}
    </div>
  );
}
export default Pagination;
