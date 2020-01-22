import React from 'react';

function Add(props) {
    return (
        <>
            <h2>Add View</h2>
            <a href="javascript:void(0)" onClick={props.onNavigateToListScreen}>
                List People
            </a>
        </>
    )
}

export default Add;