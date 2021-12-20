import React from "react";
import ProductCard from "components/ProductCard";

interface IProducts {
  children: number[];
}

const ProductsCards: React.FC<IProducts> = ({ children }): JSX.Element => {
  return (
    <div className="products">
      {children.map((item) => (
        <ProductCard key={item} />
      ))}
    </div>
  );
};

export default ProductsCards;
