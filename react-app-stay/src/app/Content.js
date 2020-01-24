import React from 'react';

import RoomList from './content/RoomList.js'

function Content(props) {
    return (
        <RoomList rooms={props.rooms} keyWordSearch={props.keyWordSearch} />
    )
}

export default Content;