import {combineReducers} from 'redux';
import jogadorReducers from './jogadorReducers';
import {reducer as formReducer } from 'redux-form';
const Reducers = combineReducers({

jogador: jogadorReducers,
form: formReducer


})


export default Reducers;