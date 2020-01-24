import React from 'react';

function RoomItem(props) {
    const room = props.room;
    return (
        <li key={room.name}>
            <span className="room-img-wrapper"><img src={props.room.img} alt={room.name} /></span>
            <span className="room-name">{props.room.name}</span>
        </li>
    )
}

export default RoomItem;