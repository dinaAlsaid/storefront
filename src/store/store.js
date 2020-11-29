import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();