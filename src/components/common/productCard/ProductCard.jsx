import ProductImageContainer from "./subcomponents/productImage/ProductImageContainer";
import ProductTextDataContainer from "./subcomponents/productTextData/ProductTextDataContainer";

const productCard = ({ product, index }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        gap: "10px",
      }}
    >
      <ProductImageContainer image={product.image} />
      <ProductTextDataContainer
        id={product.id}
        isNew={product.new}
        name={product.name}
        description={product.description}
      />
    </div>
  );
};

export default productCard;
