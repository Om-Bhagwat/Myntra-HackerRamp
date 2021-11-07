//react imports
import React from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

import Navbar from "../Navbar/Navbar";

// icon imports
import { FaMailBulk, FaGoogle, FaFacebook } from "react-icons/fa";

//css imports
import "./Password.css";

function Password(props){

    const {
        password,
        setPassword,
        phone_number,
        token,
        setToken
    } = props;


    let history = useHistory();
    //function to signIn.
    const signIn =async(e)=>{
        e.preventDefault();

        try{
            const response = await axios.post(
                "http://localhost:3003/api/user/login2",
                {
                    phone_no : phone_number,
                    password : password,
                }
            )
                console.log(response);
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("phone_number",phone_number);
                setToken(response.data.token);
                history.push("/");
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <Navbar token = {token} />
            <div className="LoginBG">
                <div className="box form">
                    <h3 className="title">Enter Account Password</h3>
                    <p>
                        For additional security, please enter your account password
                    </p>

                    <input type="password" required placeholder="Password*" onChange={(e)=>setPassword(e.target.value)} value={password} />
                    <button onClick={signIn} className="loginBtn">LOGIN</button>
                    <h6 className="moreInfo">
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
        </>
    );
}

export default Password;