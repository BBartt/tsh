import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Pagination from "components/Pagination";
import ProductsCards from "components/ProductsCards";
import { getProducts } from "redux/actions/products/actions";
import { SearchParamsContext } from "providers/AppProviders";
import { useAppSelector, useDebounce } from "hooks";

const Products: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    limit: 8,
    page: 1,
  });

  const { isLoading, error, data } = useAppSelector((state) => state.products);
  const { searchParams } = useContext(SearchParamsContext);
  const debouncedSearch = useDebounce(searchParams.search, 800);
  const {
    items,
    meta: { currentPage, totalPages },
  } = data;

  useEffect(() => {
    setParams({ ...params, page: 1 });
  }, [debouncedSearch, searchParams.active, searchParams.promo]);

  useEffect(() => {
    dispatch(getProducts({ ...params, ...searchParams }));
  }, [params, debouncedSearch, searchParams.active, searchParams.promo]);

  return (
    <div className="productsPage">
      <ProductsCards isLoading={isLoading} error={error}>
        {items}
      </ProductsCards>

      <Pagination
        pages={totalPages}
        currentPage={currentPage}
        onPageChange={(page: number) => setParams({ ...params, page })}
      />
    </div>
  );
};

export default Products;
