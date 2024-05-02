import {createStore} from 'redux';
import userReducer from '../redux/reducer/userReducer';

const store=createStore(userReducer);

export default store;