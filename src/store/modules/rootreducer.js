import { combineReducers } from 'redux';

import bag from './bag/reducer';
import products from './products/reducer';
import  singleProduct  from './singleProduct/reducer';

export default combineReducers({
  bag,
  products,
  singleProduct,
})