import { IMAGES } from "../constants";

const KEY = `/photos?client_id=${process.env.REACT_APP_SPLASH_ACCESS_KEY}`;

const loadImages = async (dispatch, page) => {
    const response = await fetch(`${process.env.REACT_APP_SPLASH_BASE_URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    dispatch({ type: IMAGES.LOAD_SUCCESS, images: data });
    if (response.status >= 400) {
        dispatch({ type: IMAGES.LOAD_FAIL, error: data.errors});
    }
};

export const fetchImages = dispatch => {
    return () => loadImages(dispatch, 1);
}