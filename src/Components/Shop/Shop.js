import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Shop = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={9}>
          <h3>Products</h3>
        </Col>
        <Col>
          <h3>Cart</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
