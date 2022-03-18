import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();

  const [show, setShow] = useState({ collapsed: false });
  const products = useSelector((state) => state.cart);


  const total = products
    .map((value) => value.price)
    .reduce((sum, a) => sum + a, 0);
  const handleChange = () => {
    setShow({ collapsed: !show.collapsed });
  };

  return (
    <div className="cart-accordion">
      <Container style={{ width: 235 }}>
        <p onClick={handleChange}>Show items</p>
        {show.collapsed ? (
          products.map((value, index) => {
            return (
              <Row key={index}>
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
