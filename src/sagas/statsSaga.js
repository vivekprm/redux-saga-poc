import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

// With retry logic
function* handleStatsRequest(id) {
    for(let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total));
            // Exit in case of success
            return true;
        }
        catch(e) {}
    }
    yield put(setImageStatsError(id));
}
// Load stats when image load success.
export default function* watchStatsRequest(){
    while(true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        //images.forEach(image => {
            // fork is similar to call but it allows multiple worker sagas
            // to work in parallel & it's nonblocking however call is blocking.
            // So we can get stats for all the images in parallel.
            // We ca't use yield inside foreach.
            // yield fork(handleStatsRequest, image.id);
        //});

        for(let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id); 
        }
    }
}