import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Pagination from "components/Pagination";
import ProductsCards from "components/ProductsCards";
import { getProducts } from "redux/actions/products/actions";
import { SearchParamsContext } from "providers/AppProviders";
import { useAppSelector, useDebounce } from "hooks";

const Products: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [params] = useState({
    limit: 8,
    page: 1,
  });

  const { isLoading, error, data } = useAppSelector((state) => state.products);
  const { searchParams } = useContext(SearchParamsContext);
  const debouncedSearch = useDebounce(searchParams.search);
  const {
    meta: { currentPage, totalItems },
  } = data;

  useEffect(() => {
    dispatch(getProducts({ ...params, ...searchParams }));
  }, [params, debouncedSearch, searchParams.active, searchParams.promo]);

  return (
    <div className="productsPage">
      <ProductsCards isLoading={isLoading} error={error}>
        {data.items}
      </ProductsCards>

      <Pagination
        currentPage={currentPage}
        totalCount={totalItems}
        pageSize={5}
        onPageChange={(page: any) => console.log(page)}
      />
    </div>
  );
};

export default Products;
