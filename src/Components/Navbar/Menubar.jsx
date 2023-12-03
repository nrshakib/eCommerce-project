import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <div className="flex list-none text-lg mt-3 pb-3 items-center justify-center">
        <li className="mr-6 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-6 cursor-pointer">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="mr-6 cursor-pointer">
          <Link to="/mens">Men</Link>
        </li>
        <li className="mr-6 cursor-pointer">
          <Link to="womens">Women</Link>
        </li>
        <li className="mr-6 cursor-pointer">
          <Link to="kids">Kids</Link>
        </li>
      </div>
    </div>
  );
};

export default Menubar;
