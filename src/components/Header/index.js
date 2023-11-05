import React, { useState } from 'react';
import { LOGO_URL } from '../../utils/constants';
import './index.css';

export const Header = () => {
    const [btnText, setBtnText] = useState("Login");

    return (
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="logo" />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button onClick={() => { btnText === "Login" ? setBtnText("Logout") : setBtnText("Login") }}>{btnText}</button>

                </ul>
            </div>
        </div>
    );
}

export default Header;
