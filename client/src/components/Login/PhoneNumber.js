//react imports
import React from "react";
import {Link} from "react-router-dom";

import Navbar from "../Navbar/Navbar";

// img imports
import OfferImg from '../../img/Login-Signup.png';

//css imports
import "../Login/PhoneNumber.css";

function PhoneNumber(props){

    const {
        phone_number,
        setPhone_Number,
        token,
        setToken
    } = props;

    return(
        <div>
            <Navbar token={token} />
            <div className="LoginBG">
                <div className="box">
                    <img src={OfferImg} alt="Offer"/>
                    <div className="form">
                        <h3 className="title">Login&nbsp;<span>or</span>&nbsp;SignUp</h3>
                        <input type="number"
                            onChange={(e)=>setPhone_Number(e.target.value)}
                            value={phone_number} required
                            placeholder="+91  |  Mobile&nbsp;Number*" />
                        <h5 className="moreInfo">
                            By Continuing, I agree too the <a href="https://www.myntra.com/termsofuse">Terms Of Use</a> & <a href="https://www.myntra.com/privacypolicy">Privacy Policy</a>
                        </h5>
                        <Link to="/password">
                            <button className="continueBtn">CONTINUE</button>
                        </Link>
                        <h6 className="moreInfo">Having Trouble Logging In ? <span>Get Help</span></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneNumber;