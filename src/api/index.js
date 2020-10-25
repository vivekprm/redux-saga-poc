const KEY = `?client_id=${process.env.REACT_APP_SPLASH_ACCESS_KEY}`;
const URL = `${process.env.REACT_APP_SPLASH_BASE_URL}/photos`;
const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}

const fetchImageStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}

export { fetchImages, fetchImageStats };