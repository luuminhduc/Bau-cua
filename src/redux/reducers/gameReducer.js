import cua from '../../images/cua.png';
import ca from '../../images/ca.png';
import bau from '../../images/bau.png';
import ga from '../../images/ga.png';
import tom from '../../images/tom.png';
import nai from '../../images/nai.png';
import * as actions from '../actions/game/actionTypes'
import { v4 as uuid } from 'uuid';
const initialState = {
    animals: [
        {
            name: cua,
            bet: 0,
            src: cua,
            id: uuid()
        },
        {
            name: nai,
            bet: 0,
            src: nai,
            id: uuid()
        },
        {
            name: ga,
            bet: 0,
            src: ga,
            id: uuid()
        },
        {
            name: tom,
            bet: 0,
            src: tom,
            id: uuid()
        },
        {
            name: ca,
            bet: 0,
            src: ca,
            id: uuid()
        },
        {
            name: bau,
            bet: 0,
            src: bau,
            id: uuid()
        },
    ],
    selectedAnimals: [1, 2, 3],
    point: 500,
    isShaking: false,
}


export default function animalReducer(state = initialState, action) {
    switch (action.type) {
        case actions.TAKE_BET: {
            const animalId = action.payload;
            const animalIndex = state.animals.findIndex(el => el.id == animalId);
            let updatedPoint = state.point;
            let updatedAnimals = [...state.animals];
            if (updatedPoint >= 100) {
                updatedAnimals[animalIndex].bet += 100;
                updatedPoint -= 100;
            }
            return { ...state, point: updatedPoint, animals: updatedAnimals };
        }
        case actions.LOWER_BET: {
            const animalId = action.payload;
            const animalIndex = state.animals.findIndex(el => el.id == animalId);
            let updatedPoint = state.point;
            let updatedAnimals = [...state.animals];
            if (updatedAnimals[animalIndex].bet > 0) {
                updatedAnimals[animalIndex].bet -= 100;
                updatedPoint += 100;
            }
            return { ...state, point: updatedPoint, animals: updatedAnimals };
        }
        case actions.CHANGE_SELECTED: {
            return { ...state, selectedAnimals: action.payload };
        }
        case actions.STOP_SHAKING: {
            return { ...state, isShaking: false };
        }
        case actions.CHANGE_THE_LAST_TIME: {
            const animals = state.animals;
            let point = state.point;
            const animalsInBet = animals.filter(el => el.bet > 0).map(el => animals.indexOf(el));
            const selectedAnimals = action.payload;
            animalsInBet.forEach(animalIndex => {
                if (selectedAnimals.includes(animalIndex)) {
                    point += animals[animalIndex].bet;
                    const appearedTime = calcTimes(animalIndex, selectedAnimals);
                    point += appearedTime * animals[animalIndex].bet;
                } else {

                }
            })
            animals.forEach(el => el.bet = 0);
            return { ...state, selectedAnimals: action.payload, point };
        }
        case actions.START_AGAIN: {
            return initialState;
        }
        default: return state;
    }
}

const calcTimes = (item, arr) => {
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == item) {
            count++;
        }
    }
    return count;
}