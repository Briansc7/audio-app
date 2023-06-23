import ProductTextData from "./ProductTextData";

const ProductTextDataContainer = ({ id, isNew, name, description }) => {
  return (
    <ProductTextData
      id={id}
      isNew={isNew}
      name={name}
      description={description}
    />
  );
};

export default ProductTextDataContainer;
