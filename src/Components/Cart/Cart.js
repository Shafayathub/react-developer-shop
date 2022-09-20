import React from 'react';
import Figure from 'react-bootstrap/Figure';
import CartData from './CartData';
const Cart = ({ cart }) => {
  const addedProduct = cart;
  console.log(addedProduct);
  if ((addedProduct.length > 0) & (addedProduct.length < 5)) {
    return (
      <div>
        {addedProduct.map((product) => (
          <CartData product={product} key={product.index}></CartData>
        ))}
      </div>
    );
  } else {
    return (
      <Figure className="d-flex align-items-center justify-content-center m-3">
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
