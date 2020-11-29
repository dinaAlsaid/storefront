const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'mobiles and stuff' },
    { name: 'food', displayName: 'Food', description: '12 layer chocolate cake' },
    { name: 'clothing', displayName: 'Clothing', description: 'عشان السترة' },
  ],
  activeCategory: 'food',
};
export const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE':
      state.activeCategory = payload
      return {...state}
    default:
      return {...state,activeCategory:'All'}
  }
  // return state;

};

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
