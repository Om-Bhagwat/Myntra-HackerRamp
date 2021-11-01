//react imports
import React from "react";
import {Link} from "react-router-dom";

// icon imports
import { FaMailBulk, FaGoogle, FaFacebook } from "react-icons/fa";

//css imports
import "./Password.css";

function Password(props){

    const {
        password,
        setPassword,
        phone_number
    } = props;

    return (
        <div className="LoginBG">
            <div className="box form">
                <h3>Enter Account Password</h3>
                <p>
                    For additional security, please enter your account password
                </p>

                {/* todo: To set an onChange property */}
                <input type="text" required placeholder="Password*" />
                <Link to="/">
                    <button className="loginBtn">LOGIN</button>
                </Link>
                <h6>
                    Have Trouble Logging In ? <span>Get Help</span>
                </h6>

                <p>Or Continue With</p>

                <div className="options">
                    <a>
                        <FaMailBulk />
                        <p>Email</p>
                    </a>
                    <a>
                        <FaGoogle />
                        <p>Google</p>
                    </a>
                    <a>
                        <FaFacebook />
                        <p>Facebook</p>
                    </a>
                </div>
                <Link to="/newAccount">
                    <button className="newAccountBtn">
                        CREATE&nbsp;NEW&nbsp;ACCOUNT
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Password;