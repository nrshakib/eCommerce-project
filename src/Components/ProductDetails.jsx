import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { ShopContext } from "../Context/ShopContext";

const ProductDetails = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const addToCartToast = () => {
    toast.success("Successfully added to Cart!", {
      position: "bottom-right",
    });
  };
  const addToWishlistToast = () => {
    toast("Successfully added to Wishlist ");
  };
  return (
    <div>
      <div className="justify-center mt-12 flex">
        <div className="flex">
          <div className="h-96 ml-10 mr-5">
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
          <div className="">
            <img className="h-full" src={product?.image} alt={product?.image} />
          </div>
        </div>
        <div className="ml-5">
          <p className="text-3xl mb-2">{product?.name}</p>
          <div className="flex mt-2">
            <p className="mr-2 text-2xl font-semibold text-red-500 mb-1">
              ${product?.new_price}
            </p>
            <p className="text-slate-600 line-through mt-2 text-sm">
              ${product?.old_price}
            </p>
          </div>
          <div className="flex mt-2 mb-2">
            <div className="flex text-yellow-500 mb-2">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
            </div>
            <p className="mb-1 text-sm ml-2">(122)</p>
          </div>
          <p className="w-96 mb-5">
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
          <button
            onClick={() => {
              addToCart(product);
              addToCartToast();
            }}
            className="w-32 border-2 p-2 rounded-lg bg-yellow-500 text-white text-sm hover:text-black"
          >
            Add To Cart
          </button>
          <button className="w-40 border-2 p-2 rounded-lg bg-red-500 text-black text-sm hover:text-white">
            Add To Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
