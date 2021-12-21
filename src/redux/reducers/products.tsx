import { IData } from "interfaces";
import {
  Constants,
  IActionProductsReducer,
} from "redux/actions/products/types";

export interface IinitialState {
  isLoading: boolean;
  error: string | null;
  data: IData;
}

export const initialState: IinitialState = {
  isLoading: false,
  error: null,
  data: {
    items: [
      {
        id: 0,
        name: "",
        description: "",
        rating: 0,
        image: "",
        promo: true,
        active: true,
      },
    ],
    meta: {
      itemCount: 0,
      totalItems: 0,
      itemsPerPage: 0,
      totalPages: 0,
      currentPage: 0,
    },
    links: {
      first: "",
      previous: "",
      next: "",
      last: "",
    },
  },
};

const moviesReducer = (
  state: IinitialState = initialState,
  action: IActionProductsReducer
): IinitialState => {
  switch (action.type) {
    case Constants.FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case Constants.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case Constants.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
