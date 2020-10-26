import * as actions from './actionTypes';

const takeBet = (id, status) => {
    return {
        type: status ? actions.TAKE_BET : actions.LOWER_BET,
        payload: id,
    }
}

const changeSelected = (arr) => {
    return {
        type: actions.CHANGE_SELECTED,
        payload: [getRandomNumber(arr), getRandomNumber(arr), getRandomNumber(arr)]
    }
}
const getRandomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

const changeTheLastTime = (arr) => {
    return {
        type: actions.CHANGE_THE_LAST_TIME,
        payload: [getRandomNumber(arr), getRandomNumber(arr), getRandomNumber(arr)]
    }
}

const stopShaking = () => {
    return {
        type: actions.STOP_SHAKING,
        payload: false,
    }
}

const startAgain = () => {
    return {
        type: actions.START_AGAIN,
        payload: null,
    }
}

export { takeBet, changeSelected, changeTheLastTime, stopShaking, startAgain };
