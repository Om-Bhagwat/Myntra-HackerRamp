//react imports
import React from "react";

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
            <button className="btn btn-primary">Next</button>
        </div>
    )
}

export default PhoneNumber;