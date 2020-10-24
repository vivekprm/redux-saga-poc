import { combineReducers } from 'redux';

import loadingReducer from "./loadingReducer";
import imagesReducer from "./imagesReducer";
import pageReducer from './pageReducer';
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    nextPage: pageReducer,
    error: errorReducer
});

export default rootReducer;