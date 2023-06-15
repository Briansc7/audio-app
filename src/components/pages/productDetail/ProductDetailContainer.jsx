import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const { id } = useParams();
  if (parseInt(id)) {
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

export default ProductDetailContainer;
