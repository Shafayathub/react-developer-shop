import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.css';

const Product = (props) => {
  const { id, index, img, name } = props.product;
  return (
    <Card style={{ width: '18rem' }} className="product ms-3 mb-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <small>
            Product sku:{index} <br />
            Product ID: {id} <br />
          </small>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nobis,
          consectetur aliquid maiores excepturi omnis.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Add To Cart</Button>
      </Card.Footer>
    </Card>
  );
};

export default Product;
