import * as actionTypes from '../actions/actions';
const initilState = {
    counter:  0,
}

const reducer = (state = initilState, action) => {
    if (action.type === actionTypes.increment.type) {
        let newState = Object.assign({}, state);
        newState.counter = state.counter + 1;
        return newState;
  
    }
    if (action.type === actionTypes.decrement.type) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === actionTypes.add.type) {
        return {
            ...state,
            counter: state.counter + action.val
        }
    }
    if (action.type === actionTypes.subtract.type) {
        return {
            ...state,
            counter: state.counter - action.val
        }
    }
    return state;

}

export default reducer;