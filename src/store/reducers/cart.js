const initialState = {
  cart: [],
  cartItems: 0,
}

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADDTOCART':
      let cart = [];
      let cartItems = state.cartItems + 1
      let productsNames = state.cart.map((item)=>{
        return item.name;
      })
      if(productsNames.includes(payload.name)){
        cart = [...state.cart];
      }else {
        cart = [...state.cart, payload];
      }
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
