import { useState, useEffect } from "react";
import ProductList from "./productList";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../../services/productsServices";

const productListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      let productsByCategory = data.filter(
        (prod) => prod.category === categoryName
      );
      setProducts(productsByCategory);
    };
    getData();
  }, [categoryName]);

  return <ProductList products={products} />;
};

export default productListContainer;
