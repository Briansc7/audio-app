import { Box, Typography } from "@mui/material";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";

const productList = ({ products, categoryName }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          backgroundColor: "secondary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          color={"secondary.second"}
          variant="h4"
          sx={{ textTransform: "uppercase" }}
        >
          {categoryName}
        </Typography>
      </Box>
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
