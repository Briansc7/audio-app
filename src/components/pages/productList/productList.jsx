const productList = () => {
  return (
    <div>
      <h1>Aca van los productos</h1>
      {productList.map((product, i) => {
        return <h1 key={product.id}>{product.name}</h1>;
      })}
    </div>
  );
};

export default productList;
