import ProductImageContainer from "./subcomponents/productImage/ProductImageContainer";
import ProductTextDataContainer from "./subcomponents/productTextData/ProductTextDataContainer";

const productCard = () => {
  return (
    <div style={{ display: "flex" }}>
      <ProductImageContainer />
      <ProductTextDataContainer />
    </div>
  );
};

export default productCard;
