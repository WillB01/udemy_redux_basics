import * as actionTypes from '../actions';
const initilState = {
    counter:  0,
}

const reducer = (state = initilState, action) => {
    if (action.type === 'INCREMENT') {
        let newState = Object.assign({}, state);
        newState.counter = state.counter + 1;
        return newState;
  
    }
    if (action.type === actionTypes.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === actionTypes.ADD) {
        return {
            ...state,
            counter: state.counter + action.val
        }
    }
    if (action.type === actionTypes.SUBTRACT) {
        return {
            ...state,
            counter: state.counter - action.val
        }
    }
    return state;

}

export default reducer;