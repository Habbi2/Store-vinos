import React from 'react'
import Cart from './Cart'
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../state/cart";

const Carrito = () => {
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState({ collapsed: false });
    const productsLength = useSelector((state) => state.cart).length;

    useEffect(() => {
        axios.get('/api/cart/get')
        .then(({data}) => dispatch(setCart(data)))
      }, [dispatch])
    
      
  const handleChange = () => {
    setCollapsed({ collapsed: !collapsed.collapsed });
  };


  return (
    <div className="d-flex order-lg-3">
          <li className="nav-item d-flex mx-5 my-2">
            <div onClick={handleChange}>
              <i className="bi bi-cart4 positio-relative cart">
                <span
                  className="position-absolute

                 translate-middle badge rounded-pill fs-4"
                >
                  {productsLength ? productsLength : 0}<span className="visually-hidden">unread messages</span>
                </span>
              </i>
            </div>
            {collapsed.collapsed ? <Cart></Cart> : <></>}
          </li>
        </div>
  )
}

export default Carrito