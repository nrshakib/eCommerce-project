import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const RelatedProducts = (props) => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <div>
      <img className="w-3/4 mx-auto" src={props.banner} alt="" />
      <div>
        <p className="ml-48 mt-2 font-bold">Related Products</p>
      </div>
      <div className="mt-5 ml-48 mr-32 grid grid-cols-4">
        {products.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.category}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
