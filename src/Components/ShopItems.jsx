import { useEffect, useState } from "react";
import Item from "./Item";

const ShopItems = () => {
  const [shopItems, setShopItems] = useState([]);
  useEffect(() => {
    fetch("/Assets/Data/all_product.json")
      .then((res) => res.json())
      .then((data) => setShopItems(data));
  }, []);
  return (
    <div className="mt-2">
      <p className="text-center text-3xl text-yellow-500">Our All Items</p>
      <hr className="h-px bg-gray-400 border-0 w-4/5 mx-auto" />

      <div className="mt-5  ml-48 mr-32 grid grid-cols-4">
        {shopItems &&
          shopItems.map((shopItem) => {
            return <Item key={shopItem.id} shopItem={shopItem} />;
          })}
      </div>
    </div>
  );
};

export default ShopItems;
