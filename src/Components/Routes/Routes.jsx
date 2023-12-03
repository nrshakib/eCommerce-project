import { createBrowserRouter } from "react-router-dom";
// import Layout from "../Layout/Main";
import Shop from "../../Pages/Shop";
import Category from "../../Pages/Category";
import Product from "../../Pages/Product";
import Cart from "../../Pages/Cart";
import LogIn from "../../Pages/LogIn";
import SignIn from "../../Pages/SignIn";
import WishList from "../../Pages/WishList";
import Main from "../Layout/Main";
// import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "mens",
        element: <Category category="men" />,
      },
      {
        path: "womens",
        element: <Category category="women" />,
      },
      {
        path: "kids",
        element: <Category category="kid" />,
      },
      {
        path: "product",
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
