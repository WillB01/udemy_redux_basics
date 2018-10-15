import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initilState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((result, index) => {
        return action.id !== index;
    });
    return updateObject(state, {results: updatedArray});
};

const reducer = (state = initilState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        return updateObject(state, { results: state.results.concat({id: new Date(),value: action.result})});
    }
    if (action.type === actionTypes.DELETE_RESULT) {

        return deleteResult(state,action);
    }
    return state;
}

export default reducer;