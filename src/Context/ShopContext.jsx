import { createContext } from "react";
import all_product from "/Assets/Data/all_product.json?url";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
