import { INCREAMENT, DECREAMENT, RESET } from "../constants/action-types";

const initialState = {
    counter: 0
};

function counterReducer(state = initialState, action) {

    if (action.type === INCREAMENT) {
        return Object.assign({}, state, {
            counter: state.counter + 1
        });
    }
    if (action.type === DECREAMENT) {
        return Object.assign({}, state, {
            counter: state.counter - 1
        });
    }
    if (action.type === RESET) {
        return Object.assign({}, state, {
            counter: initialState.counter
        });
    }
    return state;
}

export default counterReducer;