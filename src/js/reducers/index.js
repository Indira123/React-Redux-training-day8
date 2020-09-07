
import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
    counterReducer,
    postsReducer
})

export default rootReducer;


