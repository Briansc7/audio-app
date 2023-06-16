import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const { id } = useParams();
  if (isProductIdValid(id)) {
    return (
      <div>
        <ProductDetail id={id} />
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
