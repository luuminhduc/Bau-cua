import { combineReducers } from 'redux'
import animalReducer from './gameReducer';
import modalReducer from './modalReducer';
export default combineReducers({
    game: animalReducer,
    modal: modalReducer
})