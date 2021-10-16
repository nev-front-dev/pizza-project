import React from 'react';
import "./header.scss";

import { Button, Logo } from "../../components"

const Header = () => {
    
    return (
        <div className="header">
            <div className="header__inner">
                <Logo/>
                <Button/>
            </div>
        </div>
    );
}

export default Header;
