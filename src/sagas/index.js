import { takeEvery, put, take, call } from "redux-saga/effects";
import { IMAGES } from "../constants";

// Worker Saga
function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}

// Watcher Saga
// WatcherSaga -> Listens to an action -> Invokes WorkerSaga
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;