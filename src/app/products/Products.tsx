import React, { useEffect, useState } from "react";
import Pagination from "components/Pagination";
import ProductsCards from "components/ProductsCards";
import { useDispatch } from "react-redux";
import { getProducts } from "redux/actions/products/actions";
import { useAppSelector } from "hooks";

const Products: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [params] = useState({
    limit: 8,
    page: 1,
  });
  const { isLoading, error, data } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(params));
  }, [params]);

  return (
    <div className="productsPage">
      <ProductsCards isLoading={isLoading} error={error}>
        {data.items}
      </ProductsCards>

      <Pagination
        currentPage={1}
        totalCount={10}
        pageSize={5}
        onPageChange={(page: any) => console.log(page)}
      />
    </div>
  );
};

export default Products;
