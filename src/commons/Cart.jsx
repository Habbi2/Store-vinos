import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();

  const [show, setShow] = useState({ collapsed: false });
  const products = useSelector((state) => state.cart);


  const total = products
    .map((value) => value.price * value.quantity)
    .reduce((sum, a) => sum + a, 0);
  const handleChange = () => {
    setShow({ collapsed: !show.collapsed });
  };

  return (
    <div className="cart-accordion">
      <Container>
        <p onClick={handleChange}><button className="btn btn-rounded btn-buy"><strong>MOSTRAR ITEMS</strong> </button></p>
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
            <h3 className="text-white">Total:</h3>
          </Col>
          <Col xs={6}>
            <h3 className="text-white">{"$" + total}</h3>
          </Col>
        </Row>
        <br />
      </Container>
      <Link to="/checkout">
      <button className="btn btn-rounded btn-buy ms-5 mb-5">COMPRAR</button>
      </Link>
    </div>
  );
}

export default Cart;
