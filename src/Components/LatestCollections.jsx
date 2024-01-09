import { useEffect, useState } from "react";
import Item from "./Item";

const LatestCollections = () => {
  const [latestCollection, setLatestCollection] = useState([]);
  useEffect(() => {
    fetch("/Assets/Data/new_collections.json")
      .then((res) => res.json())
      .then((data) => setLatestCollection(data));
  }, []);
  return (
    <div className="mt-2">
      <p className="text-center text-3xl text-yellow-500">
        Our Latest Collections
      </p>
      <hr className="h-px bg-gray-400 border-0 w-4/5 mx-auto" />

      <div className="mt-5 ml-48 mr-32 grid grid-cols-4">
        {latestCollection &&
          latestCollection.map((item) => {
            return <Item key={item.id} shopItem={item} />;
          })}
      </div>
    </div>
  );
};

export default LatestCollections;
