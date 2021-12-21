import { AxiosResponse } from "axios";
import API from "./config";

function get({
  limit,
  page,
  search,
}: {
  limit?: number;
  page?: number;
  search?: string;
}): Promise<AxiosResponse<any, any>> {
  return API.get("/products", { params: { limit, page, search } });
}

export const productsApi = {
  get,
};
