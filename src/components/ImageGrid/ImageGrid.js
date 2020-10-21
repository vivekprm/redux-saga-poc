import React from "react";
import { connect } from "react-redux";
import { fetchImages } from "../../clients";
import './styles.css';

function ImageGrid(props) {
    const {images} = props;
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
            </section>
        </div>
    );
};
const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    images: state.images,
    error: state.error
});
const mapDispatchToProps = (dispatch) => {
    return {
        loadImages: fetchImages(dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);