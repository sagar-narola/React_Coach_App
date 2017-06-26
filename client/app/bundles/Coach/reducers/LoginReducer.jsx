import { combineReducers } from 'redux';
import { LOGIN_UPDATE } from '../constants/helloWorldConstants';

const data = (state = '', action) => {
  switch (action.type) {
    case LOGIN_UPDATE:
      alert(action.data.authenticity_token);
      return action.data;
    default:
      return state;
  }
};

const LoginReducer = combineReducers({ data });

export default LoginReducer;
