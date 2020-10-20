import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './styles.css';

function ImageGrid(props) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const key = process.env.REACT_APP_SPLASH_ACCESS_KEY
        const baseUrl = process.env.REACT_APP_SPLASH_BASE_URL
        fetch(`${baseUrl}/photos/?client_id=${key}&per_page=28`)
            .then(res => res.json())
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
            </section>
        </div>
    );
};
const mapStateToProps = ({isLoading, images, error}) => ({
    isLoading,
    images,
    error
});
export default connect(
    mapStateToProps,
    null
)(ImageGrid);