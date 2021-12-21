import React, { createContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  AppProvidersProps,
  ISearchParams,
  ISearchParamsInitialState,
} from "./AppProviders.types";
import { searchParamsInitialState } from "./initialStates";

export const SearchParamsContext = createContext<ISearchParamsInitialState>(
  searchParamsInitialState
);

export const SearchParamsProvider = ({ children }: AppProvidersProps) => {
  const [searchParams, setSearchParams] = useState<ISearchParams>(
    searchParamsInitialState.searchParams
  );

  return (
    <SearchParamsContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </SearchParamsContext.Provider>
  );
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <SearchParamsProvider>
      <Router>{children}</Router>
    </SearchParamsProvider>
  );
};
  