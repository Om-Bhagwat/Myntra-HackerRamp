//Imports
import React from "react";

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
                    This is Navbar. You are logged in.
                    <h3>{token}</h3>
                </>
            ):(
                <>
                    This is Navbar. You are logged out.
                </>
            )}
        </div>
    )
}

export default Navbar;