import ReduxThunk from 'redux-thunk';


export const addToCart = (product) => {
  return {
    type: 'ADDTOCART',
    payload: product,
  };
};

export const reduceStock = (product) => {
  return {
    type: 'REDUCESTOCK',
    payload: product,
  }
}

export const ChangeCategory = (active) => {
  return {
    type: 'CHANGE',
    payload: active,
  };
};

export const resetCategory = (active) => {
  return {
    type: 'RESET',
    payload: active,
  };
};
