import React from 'react';
import Figure from 'react-bootstrap/Figure';
const Cart = ({ cart }) => {
  let addedProduct = cart;
  console.log(addedProduct);
  if ((addedProduct.length > 0) & (addedProduct.length < 5)) {
    for (const product of addedProduct) {
      console.log(product);
      return (
        <Figure className="d-flex align-items-center justify-content-center m-1 p-2">
          <Figure.Image
            width={72}
            height={72}
            alt={product.name}
            src={product.img}
            roundedCircle
          />
          <Figure.Caption className="m-2 text-white">
            {product.name}
          </Figure.Caption>
        </Figure>
      );
    }
  } else {
    return (
      <Figure className="d-flex align-items-center justify-content-center m-1 p-2">
        <Figure.Image
          width={72}
          height={72}
          alt="react.js"
          src="./../../logo192.png"
          roundedCircle
        />
        <Figure.Caption className="m-1 text-white">
          Select less than 5 products. <br /> Selected Product: {cart.length}
        </Figure.Caption>
      </Figure>
    );
  }
};

export default Cart;
