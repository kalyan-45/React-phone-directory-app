import React from 'react';
import '../Styles/Header.css';

const Header = (props => {
    return (
        <header>
            <span>{props.heading}</span>
        </header>
    )
})

export default Header;