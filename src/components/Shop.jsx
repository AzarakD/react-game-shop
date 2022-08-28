import { useGate, useStore } from "effector-react";

import Preloader from "./Preloader";
import Goods from "./Goods";
import Cart from "./Cart";

import { $isLoading, shopGate } from "../model";

const Shop = () => {
  const isLoading = useStore($isLoading);

  useGate(shopGate);

  return (
    <main className="container content">
      <Cart />
      {isLoading ? <Preloader /> : <Goods />}
    </main>
  );
};

export default Shop;
