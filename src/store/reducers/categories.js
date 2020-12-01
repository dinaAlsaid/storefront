const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'mobiles and stuff' },
    { name: 'food', displayName: 'Food', description: '12 layer chocolate cake' },
    { name: 'clothing', displayName: 'Clothing', description: 'عشان السترة' },
  ],
  activeCategory: 'Browse',
};
export const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE':
      state.activeCategory = payload
      return {...state}
    default:
      return {...state};
  }

};

