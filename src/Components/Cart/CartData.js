import React from 'react';
import { Figure, Button } from 'react-bootstrap';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CartData = ({ product }) => {
  return (
    <div>
      {
        <Figure className="d-flex align-items-center justify-content-center m-4">
          <Figure.Image
            width={56}
            height={56}
            alt={product.name}
            src={product.img}
            roundedCircle
          />
          <Figure.Caption className="m-2 text-white">
            {product.name}{' '}
            <Button className="m-2">
              <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
            </Button>
          </Figure.Caption>
        </Figure>
      }
    </div>
  );
};

export default CartData;
