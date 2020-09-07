import { DATA_LOADED, ITEMS_LOADING } from "../constants/action-types";

const initialState = {
    remoteArticles: [],
    itemsLoading: false
};

function postsReducer(state = initialState, action) {
    if (action.type === ITEMS_LOADING) {
        return Object.assign({}, state, {
            itemsLoading: true
        });
    }
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload),
            itemsLoading: false
        });
    }

    return state;
}

export default postsReducer;