import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import CategoryContainer from "../components/pages/category/CategoryContainer";
import productListContainer from "../components/pages/productList/productListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "register",
    path: "/register",
    Element: RegisterContainer,
  },
  {
    id: "detail",
    path: "/productDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "products",
    path: "/category/:categoryName",
    Element: productListContainer,
  },
];
