const productList = ({ products }) => {
  return (
    <div>
      <h1>Aca van los productos</h1>
      {products.map((product, i) => {
        return <h1 key={product.id}>{product.name}</h1>;
      })}
    </div>
  );
};

export default productList;
