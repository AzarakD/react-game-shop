import { useEffect } from "react";
import { useStore } from "effector-react";

import Preloader from "./Preloader";
import Goods from "./Goods";

import { $isLoading, getGoods } from "../model";

const Shop = () => {
  const isLoading = useStore($isLoading);

  useEffect(() => {
    getGoods();
  }, []);

  return (
    <main className="container content">
      {isLoading ? <Preloader /> : <Goods />}
    </main>
  );
};

export default Shop;
