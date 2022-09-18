import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('fakedb.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col className="cart bg-primary rounded text-center">
          <div className="mt-5 text-white sticky-top">
            <h3>Cart</h3>
          </div>
        </Col>
        <Col xs={8} className="mx-2">
          <Container>
            <Row>
              {products.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
