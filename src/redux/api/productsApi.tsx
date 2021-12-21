import { AxiosResponse } from "axios";

import { GetRequestType } from "redux/actions/products/types";
import API from "./config";

function get({
  limit,
  page,
  search,
  active,
  promo,
}: GetRequestType): Promise<AxiosResponse<any, any>> {
  return API.get("/products", {
    params: { limit, page, search, active, promo },
  });
}

export const productsApi = {
  get,
};
