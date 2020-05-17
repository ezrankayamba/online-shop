export const SHOP_UPDATE_CART = "SHOP_UPDATE_CART";

export const updateCart = (product, quantity) => {
  return {
    type: SHOP_UPDATE_CART,
    payload: {
      product,
      quantity,
    },
  };
};
