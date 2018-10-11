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
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.val
        }
    }
    if (action.type === 'SUBSTRACT') {
        return {
            ...state,
            counter: state.counter - action.val
        }
    }
    if (action.type === 'STORE_RESULT') {
        return {
            ...state,
            results: state.results.concat(state.counter)
        }
     
     
    }


    return state;

}

export default reducer;