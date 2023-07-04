import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productsServices";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const { cart } = useSelector((store) => store.cartSlice);

  let productOfCart = cart.find((element) => element.id === +id);
  let initialQuantity = productOfCart?.quantity;

  const dispatch = useDispatch();

  const onAdd = (quantity) => {
    let data = {
      ...product,
      quantity: quantity,
    };

    dispatch(addToCart(data));
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
        <ProductDetail
          product={product}
          onAdd={onAdd}
          initialQuantity={initialQuantity}
        />
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
