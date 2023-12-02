import { useState } from "react";
import logo from "../../Assets/Icons/logo.png";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="flex items-center justify-between mx-8">
      <div className="flex items-center">
        <img src={logo} alt="" />
        <p className="text-2xl ml-2">E-Commerce</p>
      </div>
      <div className="flex list-none text-xl">
        <li
          className="mr-4 cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          className="mr-4 cursor-pointer"
          onClick={() => {
            setMenu("men");
          }}
        >
          Men
        </li>
        <li
          className="mr-4 cursor-pointer"
          onClick={() => {
            setMenu("women");
          }}
        >
          Women
        </li>
        <li
          className="mr-4 cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids
        </li>
      </div>
      <div className="flex">
        <button className="mr-2 p-1 border-2 border-black rounded-xl">
          Log In
        </button>
        <p>
          <CiShoppingCart className="h-8 w-10 text-red-500 cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
