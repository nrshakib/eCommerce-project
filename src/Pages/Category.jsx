import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Item";

const Category = (props) => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <div>
      <img className="w-3/4 mx-auto" src={props.banner} alt="" />
      <div>
        <p className="ml-48 mt-2">
          <span className="font-bold">Showing 1-12 </span>
          out of all products
        </p>
      </div>
      <div className="mt-5 ml-48 mr-32 grid grid-cols-4">
        {products.map((item) => {
          if (props.category === item.category) {
            return <Item key={item.id} shopItem={item} />;
          } else {
            return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default Category;
