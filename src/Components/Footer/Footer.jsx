import logo_big from "/Assets/Icons/logo_big.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center pb-8 mt-24">
      <div className="flex justify-center items-center mb-6">
        <img src={logo_big} alt="" />
        <p className="ml-2 text-3xl font-bold text-gray-700">E-Clothers</p>
      </div>
      <div className="flex list-none items-center justify-center text-xl text-zinc-700 mb-4">
        <li className="mr-3">Company</li>
        <li className="mr-3">Products</li>
        <li className="mr-3">Offices</li>
        <li className="mr-3">About</li>
        <li className="mr-3">Contact</li>
      </div>
      <div className="flex justify-center text-3xl mb-2">
        <button className="mr-4">
          <FaFacebookSquare />
        </button>
        <button className="mr-4">
          <FaInstagram />
        </button>
        <button className="mr-4">
          <FaWhatsapp />
        </button>
      </div>
      <hr />
      <div className="mt-1 text-sm">
        Copyright @ {new Date().getFullYear()}. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
