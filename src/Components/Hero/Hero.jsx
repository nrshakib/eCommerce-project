import hand_logo from "../../Assets/Icons/hand_icon.png";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex mt-20">
      <div className="ml-32">
        <p className="flex items-center text-2xl">
          Hello <img className="w-18 h-14 mb-4" src={hand_logo} alt="" />,
        </p>
        <p className="text-3xl text-yellow-500">Big Offer 50% off</p>
        <p className="text-5xl text-gray-700">New Collection</p>
        <p className="w-3/4 mt-4 text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa vero
          voluptates pariatur sapiente iste et placeat ex, hic eaque aliquam?
        </p>
        <div >
          <button className="w-36 bg-orange-400 text-white font-bold rounded-xl pl-4 py-2 mt-2 mb-2 flex items-center">
            SHOP NOW
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="w-2/4 h-80 -mt-56">
        <img src="https://i.ibb.co/LSXGbrb/pngwing-com-1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
