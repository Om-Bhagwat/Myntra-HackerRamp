//react imports
import React from "react";
import {Link} from "react-router-dom";

//css imports
import "../Login/PhoneNumber.css";

function PhoneNumber(props){

    const {
        phone_number,
        setPhone_Number
    } = props;

    return(
        <div>
            <input
                type="number"
                onChange={(e)=>setPhone_Number(e.target.value)}
                value={phone_number}
                required
            />
            <Link to="/password" >
                <button className="btn btn-primary">Next</button>
            </Link>
        </div>
    )
}

export default PhoneNumber;