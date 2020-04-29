import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = () => {

};

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});