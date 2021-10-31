//Imports
import React from "react";
import { FaShoppingBag, FaUserAlt, FaHeart, FaSearch } from "react-icons/fa";
import companyLogo from "../../img/myntraLogo.png";
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
                            <img src={companyLogo} alt="MLogo" />
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
                                <a>
                                    <FaUserAlt />
                                    <p>Profile</p>
                                </a>
                                <a>
                                    <FaHeart />
                                    <p>Wishlist</p>
                                </a>
                                <a>
                                    <FaShoppingBag />
                                    <p>Bag</p>
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