import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../Product/Product';
import './Shop.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faCartShopping,
  faRefresh,
} from '@fortawesome/free-solid-svg-icons';

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
        <Col className="cart bg-info rounded text-center">
          <div className="mt-5 text-white sticky-top">
            <h3>
              Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </h3>
            <div></div>
            <Button variant="dark text-white mb-2">
              Choose for the Boss{' '}
              <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
            </Button>
            <br />
            <Button variant="dark text-white">
              Pick Again <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
            </Button>
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
