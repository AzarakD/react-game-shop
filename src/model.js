import { createEffect, createEvent, createStore, forward } from "effector";
import { createGate } from "effector-react";

import { API_KEY, API_URL } from "./config";

// ===== Events =====

export const getGoodsFx = createEffect(async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const json = await response.json();

  if (json.featured) return json.featured;
});

export const goodAddedToCart = createEvent();

// ===== Stores =====

export const $goods = createStore([]).on(
  getGoodsFx.doneData,
  (_, goods) => goods
);

export const $cartGoods = createStore([]).on(goodAddedToCart, (cart, good) => {
  const goodIndex = cart.findIndex((item) => item.id === good.id);

  if (goodIndex < 0) {
    return [
      ...cart,
      {
        ...good,
        quantity: 1,
      },
    ];
  }
  return cart.map((item, index) => {
    if (index === goodIndex) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });
});

// ===== Logic Workflow =====

export const shopGate = createGate();

forward({
  from: shopGate.open,
  to: getGoodsFx,
});
