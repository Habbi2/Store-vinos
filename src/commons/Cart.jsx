import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";

function Cart() {
  const [show, setShow] = useState({ collapsed: false });
  const products = useSelector((state) => state.products);
  const exampleProducts = [products[0], products[1]];
  const total = exampleProducts
    .map((value) => value.price)
    .reduce((sum, a) => sum + a, 0);
  console.log(total);
  const handleChange = () => {
    setShow({ collapsed: !show.collapsed });
  };
  return (
    <div className="cart-accordion">
      <Container>
        <p onClick={handleChange}><button className="btn btn-rounded btn-buy"><strong>MOSTRAR ITEMS</strong> </button></p>
        {show.collapsed ? (
          exampleProducts.map((value, index) => {
            return (
              <Row>
                <CartItem product={value} />
              </Row>
            );
          })
        ) : (
          <></>
        )}
        <hr />
        <Row>
          <Col xs={6}>
            <h3 className="text-white">Total:</h3>
          </Col>
          <Col xs={6}>
            <h3 className="text-white">{"$" + total}</h3>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Cart;
