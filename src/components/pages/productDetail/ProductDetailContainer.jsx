import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productsServices";

const ProductDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const onAdd = (quantity) => {
    let data = {
      ...product,
      quantity: quantity,
    };

    console.log("agregue al carrito: ", data);
  };

  useEffect(() => {
    const getData = async () => {
      let data = await getProductById(id);
      setProduct(data);
    };

    getData();
  }, [id]);

  if (isProductIdValid(id)) {
    return (
      <div>
        <ProductDetail product={product} onAdd={onAdd} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Id inválido para detalle de producto</h1>
      </div>
    );
  }
};

function isProductIdValid(id) {
  return parseInt(id);
}

export default ProductDetailContainer;
