import { useEffect, useState } from "react";

import Preloader from "./Preloader";
import Goods from "./Goods";
import { API_KEY, API_URL } from "../config";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      {loading ? <Preloader /> : <Goods goods={goods} />}
    </main>
  );
};

export default Shop;
