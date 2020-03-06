import React from 'react';
import logo from '../../media/podspace-logo.png';
import { ReactReduxContext } from "react-redux";

function Header() {
    return (
        <ReactReduxContext.Consumer>
            {({store}) => (
                <header className="header" data-testid="header">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="mirror-counter">Mirror Counter: {store.getState().counter}</div>
                </header>
            )}
        </ReactReduxContext.Consumer>
    );
}

export default Header;