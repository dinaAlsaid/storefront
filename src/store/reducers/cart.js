const initialState = {
  cart: [],
  cartItems: 0,
}

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADDTOCART':
      let cart = [...state.cart];
      let cartItems = state.cartItems;
      if (state.cart.length === 0) {
        cartItems = state.cartItems + 1
        cart = [...state.cart, payload];
      }
      cart.forEach((item) => {
        console.log(item);
        if (item.name !== payload.name) {
          cartItems = state.cartItems + 1
          cart = [...state.cart, payload];

        }
      })

      return { cart, cartItems }
    default:
      return state;
  }
};
export const addToCart = (product) => {
  return {
    type: 'ADDTOCART',
    payload: product,
  };
};
