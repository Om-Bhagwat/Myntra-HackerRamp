//react imports
import React from "react";
import {Link} from "react-router-dom";

//css imports
import "./Password.css";

function Password(props){

    const {
        password,
        setPassword,
        phone_number
    } = props;

    return(
        <div>
            <h3>Hello {phone_number}</h3>
            <input
                onChange={(e)=>setPassword(e.target.value)}
                value = {password}
                type="password"
                required
            />
            <Link to="/">
                <button className="btn btn-primary" >Sign In</button>
            </Link>
            <Link to="/newAccount">
                <h4>Create Account</h4>
            </Link>
        </div>
    )
}

export default Password;