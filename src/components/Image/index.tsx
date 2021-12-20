import React from "react";

interface IImage {
  src: string;
  alt: string;
}

const Image: React.FC<IImage> = ({ src, alt }): JSX.Element => {
  return <img className="image" src={src} alt={alt} />;
};

export default Image;
