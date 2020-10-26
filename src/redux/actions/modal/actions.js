import * as actions from './actionTypes';

const showModal = () => {
    return {
        type: actions.SHOW_MODAL,
        payload: true,
    }
}

const hideModal = () => {
    return {
        type: actions.HIDE_MODAL,
        payload: false,
    }
}

export { showModal, hideModal };