import logo from "/Assets/Icons/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between mx-8 pt-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" />
          <p className="text-2xl ml-2">E-Clotherce</p>
        </Link>
        <div className="bg-red-400 rounded-lg">
          <input
            className="rounded-lg h-12 w-96 p-2"
            type="text"
            placeholder="Search Your Choice here"
          />
          <button className="">
            <CiSearch className="w-12 h-8 -mb-3 items-center justify-center text-white" />
          </button>
        </div>
        <div className="flex">
          <button className="mr-2 h-8 px-2 border-2 border-black rounded-xl">
            <Link to="login">Log In</Link>
          </button>
          <div className="ml-4">
            <Link to="/cart">
              <CiShoppingCart className="h-8 w-10 -mt-1 text-red-500 cursor-pointer" />
              <p className="text-center text-xs font-normal">Cart</p>
            </Link>
          </div>
          <div className="w-4 h-4 flex justify-center items-center -ml-3 rounded-xl bg-red-500 text-white text-sm font-semibold">
            0
          </div>
          <div className="ml-4">
            <Link to="/wishlist">
              <FaRegHeart className="h-6 w-8 mt-1 text-red-500 cursor-pointer" />
              <p className="text-center text-xs font-normal">Wishlist</p>
            </Link>
          </div>
          <div className="w-4 h-4 flex justify-center items-center -ml-5 rounded-xl bg-red-500 text-white text-sm font-semibold">
            0
          </div>
        </div>
      </div>
      <Menubar />
    </div>
  );
};

export default Navbar;
