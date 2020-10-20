import { IMAGES } from '../constants';

const imagesReducer = (state=[], action) => {
    if(action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.IMAGES];
    }
    return state;
}

export default imagesReducer;