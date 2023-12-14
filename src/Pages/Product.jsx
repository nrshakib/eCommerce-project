import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";
import BreadCrum from "../Components/BreadCrum";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));
  console.log(product);
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
