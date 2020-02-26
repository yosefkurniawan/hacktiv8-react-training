import React from 'react';
import logo from '../../media/podspace-logo.png';

function Header() {
    return (
        <header className="header" data-testid="header">
            <img src={logo} className="logo" alt="logo" />
        </header>
    );
}

export default Header;