import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const productList = ({ products }) => {
  return (
    <div>
      <h1>Aca van los productos</h1>
      {products.map((product, i) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <Link to={`/productDetail/${product.id}`}>
              <Button
                sx={{
                  width: "160px",
                  padding: "10px",
                }}
                variant="contained"
              >
                See Product
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default productList;
