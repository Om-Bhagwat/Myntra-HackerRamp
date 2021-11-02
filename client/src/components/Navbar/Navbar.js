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
            <div className="logo">
                <img src={CompanyLogo} alt="MLogo" />
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
                    <Link to="/phone_number">
                        <FaHeart />
                        <p>Wishlist</p>
                    </Link>
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
                        <a onClick={onLogout}>
                            <FaSignOutAlt />
                            <p>Friends</p>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;