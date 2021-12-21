import { ReactNode } from "react";

export type AppProvidersProps = {
  children: ReactNode;
};

export type ISearchParams = {
  search: string;
  active: true | undefined;
  promo: true | undefined;
};

export type ISearchParamsInitialState = {
  searchParams: ISearchParams;
  setSearchParams: (param: ISearchParams) => void;
};
