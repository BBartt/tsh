import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { IData } from "interfaces";
import { RootState } from "redux/store";
import { productsApi } from "redux/api/productsApi";
import {
  FetchProductsFail,
  FetchProductsBegin,
  FetchProductsSuccess,
  Constants,
  GetRequestType,
} from "./types";

export const fetchProductsBegin = (): FetchProductsBegin => ({
  type: Constants.FETCH_PRODUCTS_BEGIN,
  payload: null,
});

export const fetchProductsSuccess = (items: IData): FetchProductsSuccess => ({
  type: Constants.FETCH_PRODUCTS_SUCCESS,
  payload: items,
});

export const fetchProductsFailure = (error: {
  message: string;
}): FetchProductsFail => ({
  type: Constants.FETCH_PRODUCTS_FAILURE,
  payload: error.message,
});

export const getProducts =
  ({
    limit,
    page,
    search,
    active,
    promo,
  }: GetRequestType): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    dispatch(fetchProductsBegin());
    productsApi
      .get({ limit, page, search, active, promo })
      .then((res) => dispatch(fetchProductsSuccess(res.data)))
      .catch((err) => dispatch(fetchProductsFailure(err)));
  };
