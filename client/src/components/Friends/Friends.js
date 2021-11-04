import React from "react";
import ReactStars from "react-rating-stars-component";

import CompanyLogo from "../../img/myntraLogo.png";

import "./Friends.css";

function Friends(){

    return (
        <div className="container-fluid">
            <div className="col-xs-3 col-md-3 Left_div_friends">
                <h3 className="friend-list-head">FRIENDS LIST</h3>
                <div className="friend-list-body">
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Harsh</h6>
                            <p>5 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Ayush</h6>
                            <p>5 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Om</h6>
                            <p>3 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Parth</h6>
                            <p>6 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Yash</h6>
                            <p>8 Mutual Friends</p>
                        </div>
                    </div>
                </div>
                <h3 className="friend-list-head">REQUESTS</h3>
                <div className="friend-list-body">
                    {/* !!!!! Use this one as template !!!! */}
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>
                                {/* <Link to="localhost:3003/profile/:id"> */}
                                Priyanshi
                                {/* </Link> */}
                            </h6>
                            <p 
                            // onClick={() => acceptRequest(someID)}
                            >
                                Accept Request
                            </p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Harshista</h6>
                            <p 
                            // onClick={() => acceptRequest(someID)}
                            >
                                Accept Request
                            </p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Parth</h6>
                            <p 
                            // onClick={() => acceptRequest(someID)}
                            >
                                Accept Request
                            </p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Yash</h6>
                            <p 
                            // onClick={() => acceptRequest(someID)}
                            >
                                Accept Request
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xs-9 col-md-9 right_div_friends">
                <div className="borderDiv">
                    <div className="search_Bar">
                        <input
                            className="search_input"
                            placeholder="Search Friends"
                        />
                    </div>
                    <div className="WishlistNames">
                        <div className="circle_img"></div>
                        <div className="in">
                            <h3>Parth Bhardwaj's Wishlist</h3>
                            <div className="bt">
                                <button>Remove Friend</button>
                                <button>Block Friend</button>
                            </div>
                        </div>
                    </div>
                    {/* <hr className="line"/> */}
                    <div className="help-dialogue">
                        <h4>
                            Help your friend choose better by rating items in
                            their wishlist
                        </h4>
                    </div>

                    <div className="friend_wishlist">
                        <div className="wishlist_card">
                            <div className="card_left">
                                <img
                                    className="prod_im"
                                    src={CompanyLogo}
                                    alt="product_image"
                                />
                            </div>
                            <div className="card_right">
                                <h5 className="card-title">Men Black JORDAN</h5>
                                <h5 className="card-brand">ONE TAKE 2</h5>
                                <h6
                                    className="card-cost"
                                    style={{
                                        margin: "10px 0 0 0",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Rs. 8295
                                </h6>
                                <p
                                    style={{
                                        color: "green",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={33}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className="wishlist_card">
                            <div className="card_left">
                                <img
                                    className="prod_im"
                                    src={CompanyLogo}
                                    alt="product_image"
                                />
                            </div>
                            <div className="card_right">
                                <h5 className="card-title">Men Black JORDAN</h5>
                                <h5 className="card-brand">ONE TAKE 2</h5>
                                <h6
                                    className="card-cost"
                                    style={{
                                        margin: "10px 0 0 0",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Rs. 8295
                                </h6>
                                <p
                                    style={{
                                        color: "green",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={33}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className="wishlist_card">
                            <div className="card_left">
                                <img
                                    className="prod_im"
                                    src={CompanyLogo}
                                    alt="product_image"
                                />
                            </div>
                            <div className="card_right">
                                <h5 className="card-title">Men Black JORDAN</h5>
                                <h5 className="card-brand">ONE TAKE 2</h5>
                                <h6
                                    className="card-cost"
                                    style={{
                                        margin: "10px 0 0 0",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Rs. 8295
                                </h6>
                                <p
                                    style={{
                                        color: "green",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={33}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className="wishlist_card">
                            <div className="card_left">
                                <img
                                    className="prod_im"
                                    src={CompanyLogo}
                                    alt="product_image"
                                />
                            </div>
                            <div className="card_right">
                                <h5 className="card-title">Men Black JORDAN</h5>
                                <h5 className="card-brand">ONE TAKE 2</h5>
                                <h6
                                    className="card-cost"
                                    style={{
                                        margin: "10px 0 0 0",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Rs. 8295
                                </h6>
                                <p
                                    style={{
                                        color: "green",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={33}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className="wishlist_card">
                            <div className="card_left">
                                <img
                                    className="prod_im"
                                    src={CompanyLogo}
                                    alt="product_image"
                                />
                            </div>
                            <div className="card_right">
                                <h5 className="card-title">Men Black JORDAN</h5>
                                <h5 className="card-brand">ONE TAKE 2</h5>
                                <h6
                                    className="card-cost"
                                    style={{
                                        margin: "10px 0 0 0",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Rs. 8295
                                </h6>
                                <p
                                    style={{
                                        color: "green",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={33}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className="wishlist_card">
                            <div className="card_left">
                                <img
                                    className="prod_im"
                                    src={CompanyLogo}
                                    alt="product_image"
                                />
                            </div>
                            <div className="card_right">
                                <h5 className="card-title">Men Black JORDAN</h5>
                                <h5 className="card-brand">ONE TAKE 2</h5>
                                <h6
                                    className="card-cost"
                                    style={{
                                        margin: "10px 0 0 0",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Rs. 8295
                                </h6>
                                <p
                                    style={{
                                        color: "green",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={33}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className="wishlist_card">
                            <div className="card_left">
                                <img
                                    className="prod_im"
                                    src={CompanyLogo}
                                    alt="product_image"
                                />
                            </div>
                            <div className="card_right">
                                <h5 className="card-title">Men Black JORDAN</h5>
                                <h5 className="card-brand">ONE TAKE 2</h5>
                                <h6
                                    className="card-cost"
                                    style={{
                                        margin: "10px 0 0 0",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Rs. 8295
                                </h6>
                                <p
                                    style={{
                                        color: "green",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={33}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Friends;