import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";

import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const productListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let filteredCollection = query(
      refCollection,
      where("category", "==", categoryName)
    );

    const getData = async () => {
      let res = await getDocs(filteredCollection);
      let finalProducts = res.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });

      setProducts(finalProducts);
    };

    getData();
  }, [categoryName]);

  return <ProductList products={products} categoryName={categoryName} />;
};

export default productListContainer;
