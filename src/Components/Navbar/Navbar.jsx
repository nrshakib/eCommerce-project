import { useState } from "react";
import logo from "../../Assets/Icons/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="flex items-center justify-between mx-8">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="" />
        <p className="text-2xl ml-2">E-Clotherce</p>
      </Link>
      <div className="flex list-none text-xl">
        <li
          className="mr-4 cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="w-3/4 m-auto bg-blue-700 border-0 h-1" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="mr-4 cursor-pointer"
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens">Men</Link>
          {menu === "men" ? (
            <hr className="w-3/4 m-auto bg-blue-700 border-0 h-1" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="mr-4 cursor-pointer"
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="womens">Women</Link>
          {menu === "women" ? (
            <hr className="w-3/4 m-auto bg-blue-700 border-0 h-1" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="mr-4 cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="w-3/4 m-auto bg-blue-700 border-0 h-1" />
          ) : (
            <></>
          )}
        </li>
      </div>
      <div className="flex">
        <button className="mr-2 p-1 border-2 border-black rounded-xl">
          <Link to="login">Log In</Link>
        </button>
        <Link to="/cart">
          <CiShoppingCart className="h-8 w-10 text-red-500 cursor-pointer" />
        </Link>
        <div className="w-4 h-4 flex justify-center items-center -ml-4 rounded-xl bg-red-500 text-white text-sm font-semibold">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
