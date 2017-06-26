import { createStore } from 'redux';
import LoginReducer from '../reducers/LoginReducer';

const configureStore = (railsProps) => (
    createStore(LoginReducer, railsProps, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default configureStore;
