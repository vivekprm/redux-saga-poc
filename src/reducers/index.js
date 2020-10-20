import { combineReducers } from 'redux';

import loadingReducer from "./loadingReducer";
import imagesReducer from "./imagesReducer";
import pageReducer from './pageReducer';
import errorReducer from "./errorReducer";
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
    error: errorReducer
});

export default rootReducer;