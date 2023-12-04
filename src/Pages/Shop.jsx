import LatestCollections from "../Components/LatestCollections/LatestCollections";
import Offers from "../Components/Offers/Offers";
import ShopItems from "../Components/ShopItems/ShopItems";

const Shop = () => {
  return (
    <div>
      <ShopItems />
      <LatestCollections />
      <Offers />
    </div>
  );
};

export default Shop;
