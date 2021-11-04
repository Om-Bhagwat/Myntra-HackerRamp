import React from "react";

import "./UserProfile.css";

function UserProfile(){

    return(
        <div>
            <div className="upper_div">

            </div>
            <hr style={{height:"0px",borderTop:"3px solid whitesmoke"}} />
            <div className="middle_div">
                <div className="Name">
                    <div className="left_photo">
                        <div className="photo_cont">

                        </div>
                        {/* <button>Edit</button> */}
                    </div>
                    <div>
                        <h4><strong>Account</strong></h4>
                        <h6>Om Bhagwat</h6>
                    </div>
                </div>
                <div className="cont">
                    <div className="col-xs-3 col-md-3 left_div">
                        <h6>Overview</h6>
                        <hr style={{height:"0px",borderTop:"3px solid whitesmoke"}} />
                        <h4>ORDERS</h4>
                        <h6>Orders & Returns</h6>
                        <hr style={{height:"0px",borderTop:"3px solid whitesmoke"}} />
                        <h4>CREDITS</h4>
                        <h6>Coupons</h6>
                        <h6>Myntra Credit</h6>
                        <h6>MynCash</h6>
                        <hr style={{height:"0px",borderTop:"3px solid whitesmoke"}} />
                        <h4>ACCOUNT</h4>
                        <h6>Profile</h6>
                        <h6>Saved Cards</h6>
                        <h6>Addresses</h6>
                        <h6>Myntra Insider</h6>
                        <hr style={{height:"0px",borderTop:"3px solid whitesmoke"}} />
                        <h4>LEGAL</h4>
                        <h6>Terms of Use</h6>
                        <h6>Privacy Policy</h6>
                    </div>
                    <div className="col-xs-9 col-md-9 right_div">
                        <div className="inside_div">
                            <div className="info_div">
                                <div>
                                    <h4><strong style={{marginLeft:"15px"}}>Profile Details</strong></h4>
                                    <hr style={{height:"0px",borderTop:"3px solid whitesmoke"}} />
                                </div>
                                <div className="col-xs-6 col-md-6">
                                    <h6>Full Name</h6>
                                    <br></br>
                                    <h6>Mobile Number</h6>
                                    <br></br>
                                    <h6>Email ID</h6>
                                    <br></br>
                                    <h6>Gender</h6>
                                    <br></br>
                                    <h6>Date of Birth</h6>
                                    <br></br>
                                    <h6>Location</h6>
                                    <br></br>
                                    <h6>Alternate Mobile</h6>
                                    <br></br>
                                    <h6>Hint Name</h6>
                                </div>
                                <div className="col-xs-6 col-md-6">
                                    <h6>Om Bhagwat</h6>
                                    <br></br>
                                    <h6>9920028822</h6>
                                    <br></br>
                                    <h6>omtest@test.com</h6>
                                    <br></br>
                                    <h6>MALE</h6>
                                    <br></br>
                                    <h6>- not added -</h6>
                                    <br></br>
                                    <h6>- not added -</h6>
                                    <br></br>
                                    <h6>- not added -</h6>
                                    <br></br>
                                    <h6>- not added -</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower_div">

            </div>
        </div>
    )
}

export default UserProfile;