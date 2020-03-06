import React from "react";

function List(props) {
    return(
        <div className="list">
            {props.messages.length ? props.messages.map(msg => (
                <div className="item" key={msg.sent_at.toString()}>
                    <div className="row">
                        <div className="title">Nama:</div>
                        <div className="value">{msg.name}</div>
                    </div>
                    <div className="row">
                        <div className="title">Kode Pos:</div>
                        <div className="value">{msg.zipcode}</div>
                    </div>
                    <div className="row">
                        <div className="title">Telepon:</div>
                        <div className="value">{msg.telp}</div>
                    </div>
                    <div className="row">
                        <div className="title">Email:</div>
                        <div className="value">{msg.email}</div>
                    </div>
                    <div className="row">
                        <div className="title">Tanggal Pengiriman:</div>
                        <div className="value">{msg.sent_at.toString()}</div>
                    </div>
                </div>
            )) : (
                <div><i>There is no message</i></div>
            )}
        </div>
    )
}

export default List;