import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.css';

const Product = (props) => {
  const { id, index, img, name, price } = props.product;
  const { addToCart } = props;
  return (
    <Card style={{ width: '16rem' }} className="product ms-3 mb-3">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>
          <h4>{name}</h4>
        </Card.Title>
        <Card.Text>
          <b>Price: ${price}</b> <br />
          <small>
            Product sku:{index} <br />
            Product ID: {id} <br />
          </small>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nobis,
          consectetur aliquid maiores excepturi omnis.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="outline-primary"
          onClick={() => addToCart(props.product)}
        >
          Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Product;
