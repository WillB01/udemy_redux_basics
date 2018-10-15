import * as actionTypes from '../actions/actionsTypes';
const initilState = {
    results: []
}

const reducer = (state = initilState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        
        return {
            ...state,
            results: state.results.concat({id: new Date(),value: action.result})
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