import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Shop from "../../Pages/Shop";
import Category from "../../Pages/Category";
import Product from "../../Pages/Product";
import Cart from "../../Pages/Cart";
import LogIn from "../../Pages/LogIn";
import SignIn from "../../Pages/SignIn";
import WishList from "../../Pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
