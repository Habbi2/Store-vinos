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
      <Container style={{ width: 235 }}>
        <p onClick={handleChange}>Show items</p>
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
            <h3>Total:</h3>
          </Col>
          <Col xs={6}>
            <h3>{total}</h3>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Cart;
