import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadImages } from "../../actions";
import './styles.css';

function ImageGrid(props) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const KEY = `/photos?client_id=${process.env.REACT_APP_SPLASH_ACCESS_KEY}`;
        fetch(`${process.env.REACT_APP_SPLASH_BASE_URL}${KEY}&per_page=3&page=1`)
        .then(response => response.json())
        .then(images => setImages(images));
    }, []);
   
    return (
        <div className="content">
            <section className="grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <img
                            src={image.urls.small}
                            alt={image.user.username}
                        />
                    </div>
                ))}
                <a onClick={props.loadImages}>Load Images</a>
            </section>
        </div>
    );
};
const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    images: state.images,
    error: state.error
});
const mapDispatchToProps = (dispatch) => ({
    loadImages: () => dispatch(loadImages())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);