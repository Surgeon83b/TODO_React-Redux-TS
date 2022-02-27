import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './listReducer';

const store = createStore(reducer, composeWithDevTools());

export default store;
