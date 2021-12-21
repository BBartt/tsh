import React from "react";
import ProductCard from "components/ProductCard";
import Loader from "components/Loader/loader";
import { Item } from "interfaces";

interface IProducts {
  children: Item[];
  isLoading: boolean;
  error: string | null;
}

const ProductsCards: React.FC<IProducts> = ({
  children,
  isLoading,
  error,
}): JSX.Element => {
  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  console.log(`children`, children);

  return (
    <div className="products">
      {children.length > 0 ? (
        children.map(({ id, ...rest }) => <ProductCard key={id} {...rest} />)
      ) : (
        <div>No products</div>
      )}
    </div>
  );
};

export default ProductsCards;
