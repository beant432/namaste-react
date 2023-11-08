import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../../utils/constants';
import './index.css';
import useOnlineStatus from '../../utils/useOnlineStatus';


export const Header = () => {
    const [btnText, setBtnText] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="logo" />
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                        <li><Link to="contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={() => { btnText === "Login" ? setBtnText("Logout") : setBtnText("Login") }}>{btnText}</button>

                </ul>
            </div>
        </div>
    );
}

export default Header;
