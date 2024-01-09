import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";
import BreadCrum from "../Components/BreadCrum";
import RelatedProducts from "../Components/RelatedProducts";
import Description from "../Components/Description";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === parseInt(productId));
  // console.log(product);
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDetails product={product} />
      <Description />
      {/* <RelatedProducts product={product} /> */}
    </div>
  );
};

export default Product;
