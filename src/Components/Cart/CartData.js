import React from 'react';
import Figure from 'react-bootstrap/Figure';
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
            {product.name}
          </Figure.Caption>
        </Figure>
      }
    </div>
  );
};

export default CartData;
