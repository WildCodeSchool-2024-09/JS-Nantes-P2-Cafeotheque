import type React from "react";
import type { DataModel } from "../models/DataModel";

export interface PaginationProps {
  data: DataModel[];
  setCurrentElem: React.Dispatch<React.SetStateAction<DataModel[]>>;
  nbrOfElementsPerPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}
