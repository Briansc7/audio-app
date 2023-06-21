import { UseState, UseEffect } from "react";
import ProductList from "./productList";
import { UseParams } from "react-router-dom";
import { getAllProducts } from "../../../services/productsServices";

const productListContainer = () => {
  const [products, setProducts] = UseState([]);
  const { categoryName } = UseParams();

  UseEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      let productsByCategory = data.filter(
        (prod) => prod.category === categoryName
      );
      setProducts(productsByCategory);
    };
    getData();
  }, [categoryName]);

  return <ProductList />;
};

export default productListContainer;
