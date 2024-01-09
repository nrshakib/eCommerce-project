import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const ProductDetails = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="justify-center mt-12 flex">
        <div className="flex">
          <div className="h-20 ml-10 mr-5">
            <img
              className="h-24 mb-2"
              src={product?.image}
              alt={product?.image}
            />
            <img
              className="h-24 mb-2"
              src={product?.image}
              alt={product?.image}
            />
            <img
              className="h-24 mb-2"
              src={product?.image}
              alt={product?.image}
            />
            <img
              className="h-24 mb-2"
              src={product?.image}
              alt={product?.image}
            />
          </div>
          <div>
            <img src={product?.image} alt={product?.image} />
          </div>
        </div>
        <div className="ml-5">
          <p className="text-3xl mb-1">{product?.name}</p>
          <div className="flex">
            <p className="mr-2 text-xl font-semibold text-red-500 mb-1">
              ${product?.new_price}
            </p>
            <p className="text-slate-600 line-through mb-1">
              ${product?.old_price}
            </p>
          </div>
          <div className="flex text-yellow-500 mb-1">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />
          </div>
          <p>(122)</p>
          <p className="w-96 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            dolores sunt fugiat aspernatur libero commodi dolorem reiciendis eum
            possimus ipsum.
          </p>
          <select
            className="w-32 h-8 text-center rounded mb-8"
            name="Select Size"
            id=""
          >
            <option value="">Select Size</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XXL</option>
          </select>
          <br />
          <button className="w-32 border-2 p-2 rounded-lg bg-yellow-500">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
