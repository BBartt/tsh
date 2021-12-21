import { ISearchParamsInitialState } from "./AppProviders.types";

export const searchParamsInitialState: ISearchParamsInitialState = {
  searchParams: {
    search: "",
    active: undefined,
    promo: undefined,
  },
  setSearchParams: () => {},
};
