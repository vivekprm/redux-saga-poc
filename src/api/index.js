const KEY = `/photos?client_id=${process.env.REACT_APP_SPLASH_ACCESS_KEY}`;

const fetchImages = async page => {
    const response = await fetch(`${process.env.REACT_APP_SPLASH_BASE_URL}${KEY}&per_page=3&page=${page}`);
    const data = response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}

export default fetchImages;