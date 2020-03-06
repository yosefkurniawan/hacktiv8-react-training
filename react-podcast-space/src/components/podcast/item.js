import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
    const seeMoreButtonTitle = 'Lihat >>';
    const podcast = props.podcast;

    return (
        <>
                <li className="podcast-list-item">
                    <div className="podcast-image-wrapper">
                        <img src={podcast.thumbnail} alt={podcast.title} style={{ 'width': '100%' }} />
                    </div>
                    <div className="podcast-info-wrapper">
                        <h3 className="podcast-title">{podcast.title}</h3>
                        <p className="podcast-desc"><a href={podcast.url}>{podcast.url}</a></p>
                        <Link to={`/podcastview/${podcast.id}`} className="button">{seeMoreButtonTitle}</Link>
                    </div>
                </li>
        </>
    )
}

export default Item;