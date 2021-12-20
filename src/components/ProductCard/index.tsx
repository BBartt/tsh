import React from "react";
import Image from "components/Image";
import { identity } from "utils";
import Button from "components/Button";
import Rating from "components/Rating";

const ProductCard: React.FC = (): JSX.Element => {
  return (
    <div className="productCard">
      <Image src="https://fakeimg.pl/290x170" alt="img" />
      <div className="content">
        <h3 className="productCardTitle">White Watch</h3>
        <p className="productCardDescription">
          How To Protect Your Computer Very Useful Tips
        </p>

        <div className="actions">
          <Rating />
          <Button onClick={identity}>Show details</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
