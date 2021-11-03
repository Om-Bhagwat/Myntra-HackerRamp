import React from "react";
import ReactStars from "react-rating-stars-component";

import CompanyLogo from "../../img/myntraLogo.png";

import "./Friends.css";

function Friends(){

    return(
        <div>
            <div className="col-xs-2 col-md-2 Left_div_friends" style={{overflowY:"scroll"}}>
                <div style={{textAlign:"center"}}>
                    <h3>FRIENDS LIST</h3>
                </div>
                <div style={{marginTop:"20px"}}>
                    <div className = "friends_box">
                        <div>
                            <div className="circle_pic">

                            </div>
                        </div>
                        <div className="info_tab">   
                            <div>
                                <h6 style={{fontSize:"25px"}}>Harsh</h6>
                            </div>
                            <div>
                                <h6>5 Mutual Friends</h6>
                            </div>
                        </div>
                    </div>
                    <div className = "friends_box">
                        <div>
                            <div className="circle_pic">

                            </div>
                        </div>
                        <div className="info_tab">   
                            <div>
                                <h6 style={{fontSize:"25px"}}>Harsh</h6>
                            </div>
                            <div>
                                <h6>5 Mutual Friends</h6>
                            </div>
                        </div>
                    </div>
                    <div className = "friends_box">
                        <div>
                            <div className="circle_pic">

                            </div>
                        </div>
                        <div className="info_tab">   
                            <div>
                                <h6 style={{fontSize:"25px"}}>Om</h6>
                            </div>
                            <div>
                                <h6>3 Mutual Friends</h6>
                            </div>
                        </div>
                    </div>
                    <div className = "friends_box">
                        <div>
                            <div className="circle_pic">

                            </div>
                        </div>
                        <div className="info_tab">   
                            <div>
                                <h6 style={{fontSize:"25px"}}>Parth</h6>
                            </div>
                            <div>
                                <h6>6 Mutual Friends</h6>
                            </div>
                        </div>
                    </div>
                    <div className = "friends_box">
                        <div>
                            <div className="circle_pic">

                            </div>
                        </div>
                        <div className="info_tab">   
                            <div>
                                <h6 style={{fontSize:"25px"}}>Yash</h6>
                            </div>
                            <div>
                                <h6>8 Mutual Friends</h6>
                            </div>
                        </div>
                    </div>
                    <div className = "friends_box">
                        <div>
                            <div className="circle_pic">

                            </div>
                        </div>
                        <div className="info_tab">   
                            <div>
                                <h6 style={{fontSize:"25px"}}>Priyanshu</h6>
                            </div>
                            <div>
                                <h6>10 Mutual Friends</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-10 col-md-10 right_div_friends">
                <div className="search_Bar">
                    <div>
                        <input className="search_input" placeholder="   Search Friends"/>
                    </div>
                </div>
                <div className="WishlistNames">
                    <div className="outer_wish">
                        <div>
                            <div className="circle_img">

                            </div>
                        </div>
                        <div className="in">
                            <div>
                                <h3>Parth Bhardwaj's Wishlist</h3>
                            </div>
                            <div className="bt">
                                <button className="btn btn-danger">Remove Friend</button>
                                <button className="btn btn-danger">Block Friend</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{height:"0px",borderTop:"3px solid whitesmoke"}} />
                <div className="ptag">
                    <h4>Help Your friend choose better.</h4>
                </div>
                <div className="friends_wishlist">
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img className="prod_im" src={CompanyLogo} alt="product_image"/>
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{color:"green"}}>inclusive of all taxes</p>
                                <ReactStars count={5} size={25} activeColor="#ffd700" />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img className="prod_im" src={CompanyLogo} alt="product_image"/>
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{color:"green"}}>inclusive of all taxes</p>
                                <ReactStars count={5} size={25} activeColor="#ffd700" />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img className="prod_im" src={CompanyLogo} alt="product_image"/>
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{color:"green"}}>inclusive of all taxes</p>
                                <ReactStars count={5} size={25} activeColor="#ffd700" />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img className="prod_im" src={CompanyLogo} alt="product_image"/>
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{color:"green"}}>inclusive of all taxes</p>
                                <ReactStars count={5} size={25} activeColor="#ffd700" />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img className="prod_im" src={CompanyLogo} alt="product_image"/>
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{color:"green"}}>inclusive of all taxes</p>
                                <ReactStars count={5} size={25} activeColor="#ffd700" />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img className="prod_im" src={CompanyLogo} alt="product_image"/>
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{color:"green"}}>inclusive of all taxes</p>
                                <ReactStars count={5} size={25} activeColor="#ffd700" />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img className="prod_im" src={CompanyLogo} alt="product_image"/>
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{color:"green"}}>inclusive of all taxes</p>
                                <ReactStars count={5} size={25} activeColor="#ffd700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friends;