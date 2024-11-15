import type React from "react";
import "../assets/style/Pagination.css";
import type { DataModel } from "../models/index";

interface PaginationProps {
  data: DataModel[];
  setCurrentElem: React.Dispatch<React.SetStateAction<DataModel[]>>;
  nbrOfElementsPerPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

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
        <img
          className="pointer"
          alt="left-arrow precedent page"
          src="https://www.svgrepo.com/show/533593/arrow-left.svg"
          onKeyDown={(e) => {
            if (e.key === "Enter") () => handleClickPage("-");
          }}
          onClick={() => handleClickPage("-")}
        />
      )}
      <p>
        {(data.length > nbrOfElementsPerPage * (page + 1) || page > 0) &&
          page + 1}
      </p>
      {data.length > nbrOfElementsPerPage * (page + 1) && (
        <img
          className="pointer"
          alt="right-arrow next page"
          src="https://www.svgrepo.com/show/533610/arrow-right.svg"
          onKeyDown={(e) => {
            if (e.key === "Enter") () => handleClickPage("+");
          }}
          onClick={() => handleClickPage("+")}
        />
      )}
    </div>
  );
}
export default Pagination;
