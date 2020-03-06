import React from "react";

function Episodes(props) {
    return (
        <div className="episodes">
            <h4>
                <strong>Episode: </strong>
            </h4>
            {(props.episodes) ? (
                <>
                    <ul className="episodes">
                        {props.episodes.map(episode => (
                            <li key={episode.id}>
                                <audio controls>
                                    <source src={episode.audio} type="audio/mpeg" />
                                </audio>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <span>Coming Soon...</span>
            )}
        </div>
    )
}

export default Episodes;