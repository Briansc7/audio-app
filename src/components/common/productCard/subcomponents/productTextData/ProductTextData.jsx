import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductTextData = ({ id, isNew, name, description }) => {
  return (
    <div style={{ maxWidth: "500px" }}>
      <h3>{isNew ? "New Product" : null}</h3>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/productDetail/${id}`}>
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
};

export default ProductTextData;
