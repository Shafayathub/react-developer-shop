import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.css';

const Product = (props) => {
  const { id, index, img, name } = props.product;
  return (
    <Card style={{ width: '18rem' }} className="product">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>
            <small>SKU:{index}</small>
          </p>
          <p>
            <small>PI:{id}</small>
          </p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Add To Cart</Button>
      </Card.Footer>
    </Card>
  );
};

export default Product;
