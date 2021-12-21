import React from "react";
import Image from "components/Image";
import { identity } from "utils";
import Button from "components/Button";
import Rating from "components/Rating";
import { Item } from "interfaces";

const ProductCard: React.FC<Omit<Item, "id">> = ({
  name,
  description,
  rating,
  image,
  promo,
  active,
}): JSX.Element => {
  return (
    <div className="productCard">
      <Image src={image} alt={description} />
      <div className="content">
        <h3 className="productCardTitle">{name}</h3>
        <p className="productCardDescription">{description}</p>

        <div className="actions">
          <Rating />
          <Button onClick={identity}>Show details</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
