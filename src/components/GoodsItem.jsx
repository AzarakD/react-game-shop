import { useEvent } from "effector-react";

import { goodAddedToCart } from "../model";

const GoodsItem = (props) => {
  const { id, name, description, price, full_background } = props;

  const addToCart = useEvent(goodAddedToCart);

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToCart({ id, name, price })}>
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} ₽
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
