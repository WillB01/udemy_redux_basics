import * as actionTypes from './actions';
const initilState = {
    counter:  0,
    results: []
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
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({id: new Date(),value: state.counter})
        }
    }
    if (action.type === actionTypes.DELETE_RESULT) {
        // let id = action.id;
        // const newArr = [...state.results];
        // newArr.splice(id, 1);
        const updatedArray = state.results.filter((result, index) => {
            return action.id !== index;
        })
        return {
            ...state,
            results: updatedArray
        }
    }


    return state;

}

export default reducer;