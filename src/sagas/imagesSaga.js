import { takeEvery, select, call, put } from "redux-saga/effects";
import { setError, setImages } from "../actions";
import { fetchImages } from "../api";
import { IMAGES } from "../constants";

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        // put effect to dispatch an action
        yield put(setImages(images));
    }
    catch (error) {
        // dispatch error
        yield put(setError(error.toString()));
    }
}
export default function* watchImagesLoad(){
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}