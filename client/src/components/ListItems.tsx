import { useEffect, useState } from "react";

import "../assets/style/ListItems.css";

import type { DataModel } from "../models/index";

import Item from "../components/Item";
import Pagination from "../components/Pagination";
import NbrOfElementsPerPage from "../components/NbrOfElementsPerPage";

interface ListItemsProps {
  data: DataModel[];
}

function ListItems({ data }: ListItemsProps) {
  const [currentElem, setCurrentElem] = useState<DataModel[]>([]);
  const [page, setPage] = useState(0);
  // Defining choices of numbers of element per page
  const nbrOfElemsPerPageChoice = [6, 12, 24];
  // Defining the numbers of elements per page, default is the index 0 of choice array
  const [nbrOfElementsPerPage, setNbrOfElementsPerPage] = useState<number>(
    nbrOfElemsPerPageChoice[0],
  );

  useEffect(() => {
    setPage(0);
    setCurrentElem(data.slice(0, nbrOfElementsPerPage));
  }, [nbrOfElementsPerPage, data]);

  return (
    <div id="list-item-container">
      {/* Component number of elements per page */}
      <NbrOfElementsPerPage
        setNbrOfElementsPerPage={setNbrOfElementsPerPage}
        possibleNumbers={nbrOfElemsPerPageChoice}
        setPage={setPage}
      />
      {/* Listing the items */}
      <div id="list-items-container">
        {currentElem.map((el) => {
          return <Item key={el.id} item={el} />;
        })}
      </div>
      {/* Pagination component */}
      <Pagination
        page={page}
        data={data}
        setCurrentElem={setCurrentElem}
        nbrOfElementsPerPage={nbrOfElementsPerPage}
        setPage={setPage}
      />
    </div>
  );
}

export default ListItems;
