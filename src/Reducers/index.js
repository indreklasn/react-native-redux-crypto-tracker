import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';

export default combineReducers({
    crypto: CryptoReducer
});