import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";

const productList = ({ products }) => {
  return (
    <div>
      <h1>Aca van los productos</h1>
      {products.map((product, i) => {
        return (
          <div key={product.id}>
            <ProductCardContainer product={product} index={i} />
          </div>
        );
      })}
    </div>
  );
};

export default productList;
