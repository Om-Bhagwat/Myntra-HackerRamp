/* eslint-disable jsx-a11y/anchor-is-valid */
//Imports
import React from "react";
import {Link} from "react-router-dom";
import {
    FaShoppingBag,
    FaUserAlt,
    FaHeart,
    FaSearch,
    FaUserFriends,
    FaSignOutAlt
} from "react-icons/fa";

// img imports
import CompanyLogo from "../../img/myntraLogo.png";

//css imports
import './Navbar.css';

function Navbar(props){

    const {
        token,
        onLogout
    } = props;

    return (
        <div className="navbar">
            <script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                crossorigin="anonymous"
            ></script>
            <div className="logo">
                <Link to={"/"}>
                    <img src={CompanyLogo} alt="MLogo" />
                </Link>
            </div>
            <div className="items">
                <div className="categories">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        MEN
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        WOMEN
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        KIDS
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        HOME&nbsp;&&nbsp;LIVING
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        BEAUTY
                    </a>
                </div>
                <div className="navObj">
                    <a>
                        <FaSearch />
                        <p>Search</p>
                    </a>
                    {token === "" ? (
                        <Link to="/phone_number">
                            <FaUserAlt />
                            <p>Profile</p>
                        </Link>
                    ) : (
                        <Link to="/profile">
                            <FaUserAlt />
                            <p>Profile</p>
                        </Link>
                    )}
                    {/* on futher steps we will add path to wishlist here */}
                    <Link to="/phone_number">
                        <FaHeart />
                        <p>Wishlist</p>
                    </Link>
                    {/* on futher steps we will add path to bag here */}
                    <Link to="/phone_number">
                        <FaShoppingBag />
                        <p>Bag</p>
                    </Link>
                    {token === "" ? (
                        <Link to="/phone_number">
                            {/* <h3>{token}</h3> */}
                            <FaUserFriends />
                            <p>Friends</p>
                        </Link>
                    ) : (
                        <Link to="/friends">
                            {/* <h3>{token}</h3> */}
                            <FaUserFriends />
                            <p>Friends</p>
                        </Link>
                    )}
                    {token === "" ? (
                        ""
                    ) : (
                        <a onClick={onLogout}>
                            <FaSignOutAlt />
                            <p>Log&nbsp;Out</p>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;