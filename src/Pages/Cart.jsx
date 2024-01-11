import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { products, cart } = useContext(ShopContext);
  console.log(cart);
  return (
    <div>
      {/* main format of cart */}
      <div>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Action</p>
      </div>
      <hr />
      {/* cart items */}
      {cart.map((item, index) => {
        console.log(item.id);
        console.log(cart[item.id]);

        return (
          <div>
            <div>
              <img src={item?.image} alt="" />
              <p>{item?.name}</p>
              <p>{item?.new_price}</p>
              <p>{parseInt(cart[item.id])}</p>
              <p>{parseInt(item.new_price) * parseInt(cart[item.id])}</p>
              <p>
                <span>
                  <p>+</p>
                  <p>-</p>
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
