const Cart = ({ products }) => {
  console.log(products);
  return products ? (
    <div>
      {products.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.name}</p>
            <p>{value.breed}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default Cart;
