import React from "react";

function Episodes(props) {
    return (
        <div className="episodes">
            <h4>
                <strong>Episode: </strong>
            </h4>
            {(props.episodes) ? (
                <>
                    <ul class="episodes">
                        {props.episodes.map(episode => (
                            <li>
                                <audio controls key={episode.id}>
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