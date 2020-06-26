import {combineReducers} from 'redux';

import UserReducer from './reducers/UserReducer';
import CartReducer from './reducers/CartReducer';

export default combineReducers({
    user: UserReducer,
    cart: CartReducer
})