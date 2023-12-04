import { useEffect, useState } from "react";
import Item from "../Items/Item";

const ShopItems = () => {
  const [shopItems, setShopItems] = useState([]);
  useEffect(() => {
    fetch("public/Assets/Data/data.json")
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setShopItems(data));
  }, []);
  return (
    <div className="mt-2">
      <p className="text-center text-3xl text-yellow-500">Women Outfit Items</p>
      <hr className="h-px bg-gray-400 border-0 w-4/5 mx-auto" />

      <div className="flex mt-5 justify-between mx-32">
        {shopItems &&
          shopItems.map((shopItem) => {
            return <Item key={shopItem.id} shopItem={shopItem} />;
          })}
        {/* <p>{shopItems.length}</p> */}
      </div>
    </div>
  );
};

export default ShopItems;
