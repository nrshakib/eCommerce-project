import { createBrowserRouter } from "react-router-dom"
import Shop from "../../Pages/Shop";
import Category from "../../Pages/Category";
import Product from "../../Pages/Product";
import Cart from "../../Pages/Cart";
import LogIn from "../../Pages/LogIn";
import SignIn from "../../Pages/SignUp";
import WishList from "../../Pages/WishList";
import Main from "../Layout/Main";
import Home from "../Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "mens",
        element: (
          <Category
            banner="https://i.ibb.co/WyrnZdZ/banner-mens.png"
            category="men"
          />
        ),
      },
      {
        path: "womens",
        element: (
          <Category
            banner="https://i.ibb.co/xHfLjKW/banner-women.png"
            category="women"
          />
        ),
      },
      {
        path: "kids",
        element: (
          <Category
            banner="https://i.ibb.co/8gMHkns/banner-kids.png"
            category="kid"
          />
        ),
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);
export default router;
