import { IData } from "interfaces";

export enum Constants {
  FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN",
  FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
}

export type FetchProductsBegin = {
  type: typeof Constants.FETCH_PRODUCTS_BEGIN;
  payload: null;
};

export type FetchProductsSuccess = {
  type: typeof Constants.FETCH_PRODUCTS_SUCCESS;
  payload: IData;
};

export type FetchProductsFail = {
  type: typeof Constants.FETCH_PRODUCTS_FAILURE;
  payload: string;
};

export type IActionProductsReducer =
  | FetchProductsBegin
  | FetchProductsSuccess
  | FetchProductsFail;

export type GetRequestType = {
  limit?: number;
  page?: number;
  search?: string;
  active?: true | undefined;
  promo?: true | undefined;
};
