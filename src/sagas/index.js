import { takeEvery, put } from "redux-saga/effects";

// Worker Saga
function* workerSaga() {
    console.log("Hey from worker");
    console.log(put({type: 'ACTION_FROM_WORKER'}));
    yield put({type: 'ACTION_FROM_WORKER'});
}

// Watcher Saga
function* rootSaga() {
    // Listens to action hello.
    // Whenever encounters this action pauses itself and let the workerSaga do the rest.
    yield takeEvery('HELLO', workerSaga);
}

// WatcherSaga -> Listens to an action -> Invokes WorkerSaga

export default rootSaga;