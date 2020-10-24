import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadImages } from "../../actions";
import './styles.css';
import Button from "../Button";

function ImageGrid(props) {
    useEffect(() => {
        props.loadImages();
    }, []);
    const { images, error, isLoading, loadImages } = props;
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
            {error && <div className="error">{JSON.stringify(error)}</div>}
            <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>Load More</Button>
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