//react imports
import React from "react";

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
            <button className="btn btn-primary" >Sign In</button>
            <h4>Create Account</h4>
        </div>
    )
}

export default Password;