import { useStore } from "effector-react";

import GoodsItem from "./GoodsItem";
import { $goods } from "../model";

const Goods = () => {
  const goods = useStore($goods);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Goods;
