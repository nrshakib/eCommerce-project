import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

const Main = () => {
  return (
    <div className="font-sans bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-300">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
