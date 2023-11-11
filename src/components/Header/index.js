import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from '../../utils/UserContext';
import { useSelector } from "react-redux";
export const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems, cartItems.length);
  return (
    <div className="flex justify-between bg-blue-300 shadow-lg">
      <img className="w-24" src={LOGO_URL} alt="logo" />
      <div className="nav-items flex px-4 m-6">
        <ul className="flex p-5 ">
          <li className="px-3">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-3"><Link to="cart">Cart {cartItems.length>0  ? cartItems.length:""} - items</Link></li>
          <button
            className="px-3"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
