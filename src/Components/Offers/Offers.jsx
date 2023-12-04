import { FaArrowRight } from "react-icons/fa";
const Offers = () => {
  return (
    <div className="flex mt-4">
      <div className="w-2/4 ml-16">
        <img
          className="h-3/4"
          src="https://i.ibb.co/rbsGcXV/offer-banner.png"
          alt=""
        />
      </div>
      <div className="mt-44">
        <h1 className="text-3xl text-black">Exclusive</h1>
        <h1 className="text-4xl mt-2 text-yellow-500">Offers For You</h1>
        <p className="text-4xl mt-2 text-gray-600">
          On our BEST SELLER PRODUCTS
        </p>
        <button className="mt-3 w-36 bg-orange-500 text-white font-bold rounded-xl pl-4 py-2 mb-2 flex items-center p">
          Explore Now
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Offers;
