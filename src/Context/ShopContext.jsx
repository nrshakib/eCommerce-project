import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  //state to hold the fetched data
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //function to fetch json data
  const fetchProducts = async () => {
    try {
      const response = await fetch("/Assets/Data/all_product.json");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      //   console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  // Cart items function
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const contextValue = { products, addToCart, cart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
