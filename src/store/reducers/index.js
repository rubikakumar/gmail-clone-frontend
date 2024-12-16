import { combineReducers } from 'redux';
import authReducer from './authReducer';
import emailReducer from './emailReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  email: emailReducer,
});

export default rootReducer;
