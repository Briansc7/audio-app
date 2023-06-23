import ProductCard from "./ProductCard";

const productCardContainer = ({ product, index }) => {
  return <ProductCard product={product} index={index} />;
};

export default productCardContainer;
