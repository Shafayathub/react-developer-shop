import React from 'react';
import Figure from 'react-bootstrap/Figure';
import CartData from './CartData';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faRefresh } from '@fortawesome/free-solid-svg-icons';
const Cart = ({ cart }) => {
  let addedProduct = cart;
  // Uniquify data on product array
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  let unique = addedProduct.filter(onlyUnique);
  const choose = () => {
    const selection = () => {
      let randomize = Math.floor(Math.random() * 10);
      if (randomize < unique.length) {
        const chosenProduct = unique[[randomize]];

        return alert(chosenProduct.name);
        // return console.log(unique[randomize]);
      } else {
        selection();
      }
    };
    selection();
  };
  const refresh = () => {
    window.location.reload();
  };
  if ((unique.length > 0) & (unique.length < 5)) {
    return (
      <div>
        {unique.map((product) => (
          <CartData product={product} key={product.index}></CartData>
        ))}
        <Button variant="dark text-white mb-2" onClick={choose}>
          Choose for the Boss{' '}
          <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
        </Button>
        <br />
        <Button variant="dark text-white" onClick={refresh}>
          Pick Again <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        {
          <Figure className="d-flex align-items-center justify-content-center m-3">
            <Figure.Image
              width={72}
              height={72}
              alt="react.js"
              src="./../../logo192.png"
              roundedCircle
            />
            <Figure.Caption className="m-1 text-white">
              Select less than 5 products. <br /> Selected Product:{' '}
              {cart.length}
            </Figure.Caption>
          </Figure>
        }
        <Button variant="dark text-white mb-2" onClick={choose}>
          Choose for the Boss{' '}
          <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
        </Button>
        <br />
        <Button variant="dark text-white">
          Pick Again <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
        </Button>
      </div>
    );
  }
};

export default Cart;
