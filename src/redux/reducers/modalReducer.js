import * as actions from '../actions/modal/actionTypes';
const initialState = { modal: false };
export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SHOW_MODAL: {
            return { ...state, modal: action.payload }
        }
        case actions.HIDE_MODAL: {
            return { ...state, modal: action.payload }
        }
        default: return state;
    }
}