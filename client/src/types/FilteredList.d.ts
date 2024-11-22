import type { Dispatch, SetStateAction } from "react";

export interface DataModel {
  id: sumber;
  name: string;
  continent: string;
  country: string;
  profile: string;
  price: number;
  added_date: string;
  description: string;
  preparation: string;
  imgSrc?: string;
}

export type FiltersStateType = {
  continent: { isActive: boolean; filters: string[] };
  country: { isActive: boolean; filters: string[] };
  profile: { isActive: boolean; filters: string[] };
};

export type FilteredListProps = {
  filters: FiltersStateType;
  setFilters: Dispatch<SetStateAction<FiltersStateType>>;
  data: DataModel[];
};
