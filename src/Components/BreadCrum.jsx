import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const BreadCrum = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center ml-9 mt-5">
      Home
      <MdArrowForwardIos />
      Shop
      <MdArrowForwardIos />
      {product?.category}
      <MdArrowForwardIos />
      {product?.name}
    </div>
  );
};

export default BreadCrum;
