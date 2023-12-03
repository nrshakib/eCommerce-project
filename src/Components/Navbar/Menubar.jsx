import { useState } from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div>
      <div className="flex list-none text-lg mt-3 pb-3 items-center justify-center">
        <li
          className="mr-6 cursor-pointer"
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
          className="mr-6 cursor-pointer"
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
          className="mr-6 cursor-pointer"
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
          className="mr-6 cursor-pointer"
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
    </div>
  );
};

export default Menubar;
