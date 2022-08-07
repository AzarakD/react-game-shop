import { createEffect, createStore } from "effector";
import { API_KEY, API_URL } from "./config";

export const getGoods = createEffect(async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const json = await response.json();

  if (json.featured) return json.featured;
});

export const $goods = createStore([]).on(
  getGoods.doneData,
  (_, goods) => goods
);
export const $isLoading = createStore(true).on(getGoods.done, () => false);
