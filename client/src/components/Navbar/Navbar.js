/* eslint-disable jsx-a11y/anchor-is-valid */
//Imports
import React from "react";
import {Link} from "react-router-dom";
import {
    FaShoppingBag,
    FaUserAlt,
    FaHeart,
    FaSearch,
    FaUserFriends
} from "react-icons/fa";

// img imports
import CompanyLogo from "../../img/myntraLogo.png";

//css imports
import './Navbar.css';

function Navbar(props){

    const {
        token
    } = props;
    return (
        <div>
            {token !== "" ? (
                <>
                    <h3>{token}</h3>
                    This is Navbar. You are logged in.
                </>
            ) : (
                <>
                    <div className="navbar">
                        <div className="logo">
                            <img src={CompanyLogo} alt="MLogo" />
                        </div>
                        <div className="items">
                            <div className="categories">
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    MEN
                                </a>
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WOMEN
                                </a>
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    KIDS
                                </a>
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    HOME&nbsp;&&nbsp;LIVING
                                </a>
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    BEAUTY
                                </a>
                            </div>
                            <div className="navObj">
                                <a>
                                    <FaSearch />
                                    <p>Search</p>
                                </a>
                                <Link to="/phone_number">
                                    <a>
                                        <FaUserAlt />
                                        <p>Profile</p>
                                    </a>
                                </Link>
                                <a>
                                    <FaHeart />
                                    <p>Wishlist</p>
                                </a>
                                <a>
                                    <FaShoppingBag />
                                    <p>Bag</p>
                                </a>
                                <a>
                                    <FaUserFriends />
                                    <p>Friends</p>
                                </a>    
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Navbar;