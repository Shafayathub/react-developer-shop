import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../Product/Product';
import './Shop.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('fakedb.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Using state to change the state of cart component
  const [cart, setCart] = useState([]);
  // Product page add to cart handler function
  const addToCart = (product) => {
    // Sharing onclicked product with cart component
    let newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={4} className="cart bg-info rounded text-center">
          <div className="mt-5 text-white sticky-top p-2">
            <h3>
              Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </h3>
            <Cart cart={cart} addToCart={addToCart}></Cart>
          </div>
        </Col>
        <Col xs={7} className="mx-2">
          <Container>
            <Row>
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                ></Product>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
