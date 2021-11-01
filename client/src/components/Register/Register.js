//react imports
import React from "react";

// icon imports
import { FaCheckCircle } from "react-icons/fa";

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

    return (
        <div className="LoginBG">
            <div className="box form">
                <h3>Complete Your Sign Up</h3>

                <div className="phoneDiv">
                    <div className="phoneDiv2">
                        <p>Mobile Number</p>
                        <h6>9929421492</h6>
                    </div>
                    <div className="FaCheckCircle">
                        <FaCheckCircle/>
                    </div>
                </div>

                {/* todo: To set an onChange property */}
                <input class="createPasswordInput" onChange={(e) => setPassword(e.target.value)} 
                value={password} type="password" required placeholder="Create Password"/>
                <div className="requirements">
                    <span>8 Characters</span>
                    <span>1 Special</span>
                    <span>1 Uppercase</span>
                    <span>1 Numeric</span>
                </div>

                <input onChange={(e) => setName(e.target.value)} 
                value={name} type="string" required placeholder="Full Name"/>
                
                <input onChange={(e) => setEmail(e.target.value)} 
                value={email} type="email" placeholder="Email (Optional)"/>

                <div className="selectGender">
                    <h6>Select Gender:</h6>
                    <div className="genderOption">
                        <input type="radio" id="Female" name="gender" value="female"/>
                        <label for="Female">Female</label>
                    </div>
                    <div className="genderOption">
                        <input type="radio" id="Male" name="gender" value="male"/>
                        <label for="Male">Male</label>
                    </div>
                </div>
                
                <input onChange={(e) => setAlternatePhone(e.target.value)} 
                value={alternatephone} type="number" placeholder="+91  |  Alternate Mobile Number"/>
                <p>This will help recover your account if needed</p>

                <input onChange={(e) => setAlternateName(e.target.value)} 
                value={alternateName} type="string" placeholder="Hint Name (Alternate Number)"/>
                <p>This name will be a hint for your alternate number</p>
                
                <button className="createAccountBtn">CREATE&nbsp;ACCOUNT</button>
            </div>
        </div>
    );
}

export default Register;