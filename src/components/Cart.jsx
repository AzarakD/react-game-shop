import { useStore } from "effector-react";

import { $cartGoods } from "../model";

const Cart = () => {
  const quantity = useStore($cartGoods).length;

  return (
    <div className="cart blue darken-4 white-text">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
