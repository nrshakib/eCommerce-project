import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="font-sans bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-300">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
