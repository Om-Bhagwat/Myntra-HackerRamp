//Imports
import React from "react";
import { FaShoppingBag, FaUserAlt, FaHeart, FaSearch } from "react-icons/fa";
import logoImport from "../../img/myntraLogo.png";
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
                    This is Navbar. You are logged out.
                    <br />
                    <div className="navbar">
                        <div className="logo">
                            <img href={logoImport} alt="MLogo" />
                        </div>
                        <div className="items">
                            <div className="categories">
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Men
                                </a>
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Women
                                </a>
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Kids
                                </a>
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Home&nbsp;&&nbsp;Beauty
                                </a>
                            </div>
                            <div className="navObj">
                                <div>
                                    <FaSearch />
                                    <p>Search</p>
                                </div>
                                <div>
                                    <FaUserAlt />
                                    <p>Profile</p>
                                </div>
                                <div>
                                    <FaHeart />
                                    <p>Wishlist</p>
                                </div>
                                <div>
                                    <FaShoppingBag />
                                    <p>Bag</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Navbar;