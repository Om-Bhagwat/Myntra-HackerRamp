//react imports
import React from "react";
import {Link} from "react-router-dom";

//css imports
import "./Register.css";

function Register(props){

    const {
        phone_number,
        password,
        setPassword,
        name,
        setName,
        email,
        setEmail,
        gender,
        setGender,
        alternatephone,
        setAlternatePhone,
        alternateName,
        setAlternateName
    } = props;

    return(
        <div>
            <h3>Continue {phone_number}</h3>
            <input
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="password"
                required
            />
            <input
                onChange={(e)=>setName(e.target.value)}
                value={name}
                type="string"
                required
            />
            <input
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="email"
            />
            <input
                onChange={(e)=>setGender(e.target.value)}
                value={gender}
                type="string"
                required
            />
            <input
                onChange={(e)=>setAlternatePhone(e.target.value)}
                value={alternatephone}
                type="number"
            />
            <input
                onChange={(e)=>setAlternateName(e.target.value)}
                value={alternateName}
                type="string"
            />
            <Link to="/">
                <button className="btn btn-primary" >Create</button>
            </Link>
            <Link to="/password">
                <p>Have an account?</p>
            </Link>
        </div>
    )
}

export default Register;