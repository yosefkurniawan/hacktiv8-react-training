import React, {lazy, Suspense} from "react";
import { 
    useParams,
    Link
} from "react-router-dom";
const Episodes = lazy(() => import('../../components/podcast/episodes.js'));

function View(props) {
    const backButtonText = '<< Kembali';
    const podcasts = props.podcasts;
    const { podcastid } = useParams();
    const podcast = getPodcastById(podcastid);

    function getPodcastById(id) {
        const podcast = podcasts.find(x => x.id === parseInt(id));
        return podcast;
    }
    return (
        <div className="podcast-view">
            <div className="podcast-image-wrapper">
                <img src={podcast.thumbnail} alt={podcast.title} style={{'width': '100%'}}/>
                <Link to="/" className="button" style={{'marginTop':'20px'}}>{backButtonText}</Link>
            </div>
            <div className="podcast-info-wrapper">
                <h3 className="podcast-title">{podcast.title}</h3>
                <p className="podcast-desc"><a href={podcast.url}>{podcast.url}</a></p>
                <Suspense>
                    <Episodes episodes={podcast.episodes} />
                </Suspense>
            </div>
        </div>
    )
}

export default View;