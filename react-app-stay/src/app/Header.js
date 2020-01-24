import React from 'react';

import Searchform from './header/Searchform.js'
import Logo from './header/Logo.js'

function Header(props) {
    return (
        <header>
            <Logo />
            <Searchform onSearch={props.onSearch} />
        </header>
    )
}

export default Header;