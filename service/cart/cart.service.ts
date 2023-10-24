import api from "@/utils/api";

export const GetCartItems = () => {
  return api.get("/cart");
};

export const AddItemsToCart = (data: object) => {
  const doc = api.post("/cart", { data: data });
  console.log(doc);
  return doc;
};

export const RemoveItemsFromCart = (data: object) => {
  const doc = api.delete("/cart", { data: data });
  return doc;
};

export const AddRemoveCoupon = (coupon: string, type: string) => {
  const doc = api.post("/cart/coupon", { coupon: coupon, type: type });
  return doc;
};
