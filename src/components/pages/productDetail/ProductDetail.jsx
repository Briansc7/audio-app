import CounterContainer from "../../common/counter/CounterContainer";

const ProductDetail = ({ product, onAdd }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h4>{product.description}</h4>
      <CounterContainer onAdd={onAdd} />
    </div>
  );
};

export default ProductDetail;
