import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initilState = {
    counter:  0,
}

const reducer = (state = initilState, action) => {
    if (action.type === 'INCREMENT') {
        let newState = Object.assign({}, state);
        return updateObject(state, {counter: newState.counter = state.counter + 1}); 
    }
    if (action.type === actionTypes.DECREMENT) {
        return updateObject(state, {counter: state.counter - 1}); 
    }
    if (action.type === actionTypes.ADD) {
        return updateObject(state, {counter: state.counter + action.val});
    }
    if (action.type === actionTypes.SUBTRACT) {
        return updateObject(state, {counter: state.counter - action.val}); 
    }
    return state;
}

export default reducer;