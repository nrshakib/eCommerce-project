import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  //state to hold the fetched data
  const [products, setProducts] = useState([]);

  //function to fetch json data
  const fetchProducts = async () => {
    try {
      const response = await fetch("/public/Assets/Data/all_product.json");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      //   console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  },[]);
  const contextValue = { products };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
