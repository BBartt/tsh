import React from "react";
import Pagination from "components/Pagination";
import ProductsCards from "components/ProductsCards";

const productsArr = Array.from({ length: 7 }, (_, index) => index);

const Products: React.FC = (): JSX.Element => {
  return (
    <div className="productsPage">
      <ProductsCards>{productsArr}</ProductsCards>

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
